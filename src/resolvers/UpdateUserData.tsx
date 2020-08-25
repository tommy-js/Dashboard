import React from "react";
import { updateUserMutation } from "../queries/queries.js";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";

interface Props {
  userId: number;
  membership: string;
  accountStatus: string;
  money: number;
  updateUserMutation: (variables: object) => void;
}

const UpdateUserData: React.FC<Props> = (props) => {
  function submitUpdate() {
    props.updateUserMutation({
      variables: {
        userId: props.userId,
        membership: props.membership,
        accountStatus: props.accountStatus,
        money: props.money,
      },
    });
  }

  return <button onClick={() => submitUpdate()}>Update user</button>;
};

export default compose(
  graphql(updateUserMutation, { name: "updateUserMutation" })
)(UpdateUserData);
