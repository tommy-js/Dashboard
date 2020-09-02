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

const employeeQuery = gql`
  {
    employees {
      employeeId
      username
      permissions
    }
  }
`;

const searchStockQuery = gql`
  query($ticker: String!) {
    searchStocks(ticker: $ticker) {
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

const searchCommentQuery = gql`
  query($commentId: ID!) {
    searchComments(commentId: $commentId) {
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

const searchUserQuery = gql`
  query($username: String!) {
    searchUsers(username: $username) {
      username
      password
      money
      membership
      accountStatus
      userId
    }
  }
`;

const searchEmployeeQuery = gql`
  query($employeeId: ID!) {
    searchEmployees(employeeId: $employeeId) {
      employeeId
      username
      permissions
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

const createEmployeeMutation = gql`
  mutation(
    $employeeId: ID!
    $username: String!
    $permissions: String!
    $password: String!
  ) {
    createEmployee(
      employeeId: $employeeId
      username: $username
      permissions: $permissions
      password: $password
    ) {
      username
      permissions
      employeeId
      password
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

const updateStockMutation = gql`
  mutation($stockId: ID!, $about: String!) {
    updateStock(stockId: $stockId, about: $about) {
      stockId
      about
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

const updateEmployeeMutation = gql`
  mutation($employeeId: ID!, $permissions: String!, $password: String!) {
    updateEmployee(
      employeeId: $employeeId
      permissions: $permissions
      password: $password
    ) {
      employeeId
      permissions
      password
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
      notifications {
        content
        timestamp
        id
      }
    }
  }
`;

const createStockMutation = gql`
  mutation(
    $stockId: ID!
    $name: String!
    $ticker: String!
    $about: String!
    $creation: Int!
    $prediction: Float!
  ) {
    createStock(
      stockId: $stockId
      name: $name
      ticker: $ticker
      about: $about
      creation: $creation
      prediction: $prediction
    ) {
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

const deleteStockMutation = gql`
  mutation($stockId: ID!) {
    deleteStock(stockId: $stockId) {
      stockId
    }
  }
`;

const deleteCommentMutation = gql`
  mutation($commentId: ID!) {
    deleteComment(commentId: $commentId) {
      commentId
    }
  }
`;

const deleteUserMutation = gql`
  mutation($userId: ID!) {
    deleteUser(userId: $userId) {
      userId
    }
  }
`;

const deleteEmployeeMutation = gql`
  mutation($employeeId: ID!) {
    deleteEmployee(employeeId: $employeeId) {
      employeeId
    }
  }
`;

export {
  usersQuery,
  stockQuery,
  commentQuery,
  employeeQuery,
  searchStockQuery,
  searchCommentQuery,
  searchUserQuery,
  searchEmployeeQuery,
  createUserMutation,
  createStockMutation,
  createCommentMutation,
  createEmployeeMutation,
  updateUserMutation,
  updateUserNotificationMutation,
  updateCommentMutation,
  updateEmployeeMutation,
  updateStockMutation,
  deleteStockMutation,
  deleteCommentMutation,
  deleteUserMutation,
  deleteEmployeeMutation,
};
