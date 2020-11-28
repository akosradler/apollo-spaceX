/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface Login {
  login: {
    __typename: "User";
    id: string;
    token: string | null;
  };
}

export interface LoginVariables {
  email: string;
}
