import React from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { createCommentMutation } from "../queries/queries";

interface Props {
  username: string;
  userId: number;
  text: string;
  createCommentMutation: (variables: object) => void;
}

const CreateComment: React.FC<Props> = (props) => {
  function createComment() {
    props.createCommentMutation({
      variables: {
        username: props.username,
        userId: props.userId,
        text: props.text,
      },
    });
  }

  return <button onClick={() => createComment()}>Create</button>;
};

export default compose(
  graphql(createCommentMutation, { name: "createCommentMutation" })
)(CreateComment);
