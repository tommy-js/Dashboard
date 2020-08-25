import React from "react";
import { updateUserNotificationMutation } from "../queries/queries.js";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";

interface Props {
  userId: number;
  content: string;
  updateUserNotificationMutation: (variables: object) => void;
}

const SubmitNotification: React.FC<Props> = (props) => {
  function submitNotification() {
    let currentTime = new Date().getTime();
    let currentId = Math.floor(Math.random() * 1000000);
    props.updateUserNotificationMutation({
      variables: {
        userId: props.userId,
        content: props.content,
        timestamp: currentTime,
        id: currentId,
      },
    });
  }

  return (
    <button onClick={() => submitNotification()}>submit notification</button>
  );
};

export default compose(
  graphql(updateUserNotificationMutation, {
    name: "updateUserNotificationMutation",
  })
)(SubmitNotification);
