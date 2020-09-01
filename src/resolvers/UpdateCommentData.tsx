import React from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { updateCommentMutation } from "../queries/queries.js";

interface Props {
  commentId: number;
  text: string;
  likes: number;
  dislikes: number;
  updateCommentMutation: (variables: object) => void;
  successfulResolve: () => void;
}

const UpdateCommentData: React.FC<Props> = (props) => {
  function updateComment() {
    console.log("passing data to comments");
    props.updateCommentMutation({
      variables: {
        commentId: props.commentId,
        text: props.text,
        likes: props.likes,
        dislikes: props.dislikes,
      },
    });
    props.successfulResolve();
  }

  return <button onClick={() => updateComment()}>Submit Changes</button>;
};

export default compose(
  graphql(updateCommentMutation, { name: "updateCommentMutation" })
)(UpdateCommentData);
