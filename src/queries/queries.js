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

const commentQuery = gql`
  {
    comments {
      userId
      commentId
      username
      timestamp
      text
      likes
      dislikes
    }
  }
`;

const stockQuery = gql`
  {
    stocks {
      stockId
      ticker
      name
      about
      creation
      prediction
      comments {
        userId
        username
        timestamp
        text
        likes
        dislikes
      }
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

const updateCommentMutation = gql`
  mutation($commentId: ID!, $text: String!, $likes: Int!, $dislikes: Int!) {
    updateComment(
      commentId: $commentId
      text: $text
      likes: $likes
      dislikes: $dislikes
    ) {
      commentId
      text
      likes
      dislikes
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

const createStockMutation = gql`
  mutation($stockId: ID!, $name: String!, $ticker: String!) {
    createStock(stockId: $stockId, name: $name, ticker: $ticker) {
      stockId
      name
      ticker
    }
  }
`;

const createCommentMutation = gql`
  mutation(
    $username: String!
    $userId: ID!
    $text: String!
    $commentId: ID!
    $likes: Int!
    $dislikes: Int!
    $timestamp: ID!
  ) {
    createComment(
      username: $username
      userId: $userId
      text: $text
      commentId: $commentId
      likes: $likes
      dislikes: $dislikes
      timestamp: $timestamp
    ) {
      username
      userId
      text
      commentId
    }
  }
`;

export {
  usersQuery,
  stockQuery,
  commentQuery,
  createUserMutation,
  createStockMutation,
  createCommentMutation,
  updateUserMutation,
  updateUserNotificationMutation,
  updateCommentMutation,
};
