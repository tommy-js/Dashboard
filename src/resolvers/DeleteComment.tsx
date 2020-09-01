import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { deleteCommentMutation } from "../queries/queries.js";

interface Props {
  commentId: number;
  deleteCommentMutation: (variables: object) => void;
  deleteState: () => void;
}

const DeleteComment: React.FC<Props> = (props) => {
  function deleteComment() {
    props.deleteState();
    props.deleteCommentMutation({
      variables: {
        commentId: props.commentId,
      },
    });
  }

  return <button onClick={() => deleteComment()}>Delete Comment</button>;
};

export default compose(
  graphql(deleteCommentMutation, { name: "deleteCommentMutation" })
)(DeleteComment);
