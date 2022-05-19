import { Component, OnInit } from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { Observable } from 'rxjs'
import { UserQuery, UserQueryService } from './../graphql/schema'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    user$: Observable<ApolloQueryResult<UserQuery>>

    constructor(
        private userQueryService: UserQueryService,
    ) { }

    ngOnInit(): void {
        this.user$ = this.userQueryService.fetch()
    }

}
