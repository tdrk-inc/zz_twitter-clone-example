import { gql } from "@apollo/client";

export const GET_ACCOUNT = gql`
  query GetAccount {
    account {
      id
      name
    }
  }
`;
