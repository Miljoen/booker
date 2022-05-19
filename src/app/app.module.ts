import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { InMemoryCache } from '@apollo/client/core'
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginModule } from './auth/login/login.module'
import { SignUpModule } from './auth/sign-up/sign-up.module'
import { HeaderModule } from './header/header.module'


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        HeaderModule,
        LoginModule,
        SignUpModule,
        ApolloModule,
        HttpClientModule,
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: 'http://localhost:3000/graphql',
                    }),
                }
            },
            deps: [HttpLink],
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
