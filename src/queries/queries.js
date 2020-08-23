import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const createUserMutation = gql`
  mutation(
    $userId: ID!
    $username: String!
    $password: String!
    $money: Float!
    $darkmode: Boolean!
    $invisible: Boolean!
    $allowCommentsOnTrades: Boolean!
  ) {
    createUser(
      userId: $userId
      username: $username
      password: $password
      money: $money
      darkmode: $darkmode
      invisible: $invisible
      allowCommentsOnTrades: $allowCommentsOnTrades
    ) {
      userId
      username
      password
      money
    }
  }
`;

export { createUserMutation };
