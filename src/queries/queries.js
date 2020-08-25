import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const usersQuery = gql`
  {
    users {
      username
      password
      money
      membership
      accountStatus
      userId
    }
  }
`;

const createUserMutation = gql`
  mutation(
    $userId: ID!
    $username: String!
    $password: String!
    $money: Float!
    $membership: String!
    $accountStatus: String!
    $darkmode: Boolean!
    $invisible: Boolean!
    $profileImage: Int!
    $allowCommentsOnTrades: Boolean!
    $timestamp: ID!
    $notificationId: ID!
    $notification: String!
  ) {
    createUser(
      userId: $userId
      username: $username
      password: $password
      profileImage: $profileImage
      money: $money
      membership: $membership
      accountStatus: $accountStatus
      darkmode: $darkmode
      invisible: $invisible
      allowCommentsOnTrades: $allowCommentsOnTrades
      timestamp: $timestamp
      notificationId: $notificationId
      notification: $notification
    ) {
      userId
      username
      password
      money
    }
  }
`;

const updateUserMutation = gql`
  mutation(
    $userId: ID!
    $membership: String!
    $accountStatus: String!
    $money: Int!
  ) {
    updateUser(
      userId: $userId
      membership: $membership
      accountStatus: $accountStatus
      money: $money
    ) {
      userId
      membership
      accountStatus
      money
    }
  }
`;

const updateUserNotificationMutation = gql`
  mutation($userId: ID!, $content: String!, $timestamp: ID!, $id: ID!) {
    updateUserNotification(
      userId: $userId
      content: $content
      timestamp: $timestamp
      id: $id
    ) {
      userId
      content
      timestamp
      id
    }
  }
`;

export {
  usersQuery,
  createUserMutation,
  updateUserMutation,
  updateUserNotificationMutation,
};
