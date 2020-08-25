import React from "react";
import { createUserMutation } from "../queries/queries.js";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";

interface Props {
  createUserMutation: (variables: object) => void;
  username: string;
  password: string;
  money: number;
  membership: string;
  accountStatus: string;
  darkmode: boolean;
  invisible: boolean;
  allowCommentsOnTrades: boolean;
  notification: string;
}

const CreateUser: React.FC<Props> = (props) => {
  function createUser() {
    let randomUserID = Math.floor(Math.random() * 100000000);
    let randomNotificationId = Math.floor(Math.random() * 10000000);
    let currentTime = new Date().getTime();
    props.createUserMutation({
      variables: {
        userId: randomUserID,
        username: props.username,
        password: props.password,
        money: props.money,
        membership: props.membership,
        accountStatus: props.accountStatus,
        profileImage: 0,
        darkmode: props.darkmode,
        invisible: props.invisible,
        allowCommentsOnTrades: props.allowCommentsOnTrades,
        notifications: props.notification,
        notificationId: randomNotificationId,
        timestamp: currentTime,
      },
    });
  }

  return (
    <div>
      <button onClick={() => createUser()}>Create</button>
    </div>
  );
};

export default compose(
  graphql(createUserMutation, { name: "createUserMutation" })
)(CreateUser);
