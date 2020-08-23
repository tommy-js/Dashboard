import React from "react";
import { createUserMutation } from "../queries/queries.js";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";

interface Props {
  createUserMutation: (variables: object) => void;
  username: string;
  userId: number;
  password: string;
  money: number;
  darkmode: boolean;
  invisible: boolean;
  allowCommentsOnTrades: boolean;
}

const CreateUser: React.FC<Props> = (props) => {
  function createUser() {
    props.createUserMutation({
      variables: {
        userId: props.userId,
        username: props.username,
        password: props.password,
        money: props.money,
        darkmode: props.darkmode,
        invisible: props.invisible,
        allowCommentsOnTrades: props.allowCommentsOnTrades,
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
