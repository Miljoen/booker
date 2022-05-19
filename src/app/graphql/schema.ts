// noinspection JSUnusedGlobalSymbols

import { Injectable } from '@angular/core'
import * as Apollo from 'apollo-angular'
import { gql } from 'apollo-angular'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
}

export interface CreateUserInput {
    email: Scalars['String'];
    password: Scalars['String'];
}

export interface Mutation {
    createUser: User;
}


export interface MutationCreateUserArgs {
    createUserData: CreateUserInput;
}

export interface Query {
    user: User;
}


export interface QueryUserArgs {
    id: Scalars['String'];
}

export interface User {
    email: Scalars['String'];
    id: Scalars['String'];
}

export type UserQueryVariables = Exact<{ [key: string]: never; }>


export type UserQuery = { user: { id: string, email: string } }

export type UserFragment = { id: string, email: string }

export const UserFragmentDoc = gql`
    fragment User on User {
  id
  email
}
    `
export const UserDocument = gql`
    query user {
  user(id: "1") {
    ...User
  }
}
    ${UserFragmentDoc}`

@Injectable({
    providedIn: 'root',
})
export class UserQueryService extends Apollo.Query<UserQuery, UserQueryVariables> {
    override document = UserDocument

    constructor(apollo: Apollo.Apollo) {
        super(apollo)
    }
}
