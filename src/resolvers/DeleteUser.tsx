import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { deleteUserMutation } from "../queries/queries.js";

interface Props {
  userId: number;
  deleteUserMutation: (variables: object) => void;
  deleteState: () => void;
}

const DeleteUser: React.FC<Props> = (props) => {
  function deleteUser() {
    props.deleteState();
    props.deleteUserMutation({
      variables: {
        userId: props.userId,
      },
    });
  }

  return <button onClick={() => deleteUser()}>Delete</button>;
};

export default compose(
  graphql(deleteUserMutation, { name: "deleteUserMutation" })
)(DeleteUser);
