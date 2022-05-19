import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    @Output() submitEvent = new EventEmitter<any>()
    @Input() submitLabel: string

    email = new FormControl('', [Validators.required, Validators.email])
    password = new FormControl('', [Validators.required])

    getEmailErrorMessage() {
        if (this.email.hasError('required')) {
            return 'You must enter a value'
        }

        return this.email.hasError('email') ? 'Not a valid email' : ''
    }

    getPasswordErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' : ''
    }

    onSubmit() {
        this.submitEvent.emit({
            email: this.email.value,
            password: this.password.value,
        })
    }
}
