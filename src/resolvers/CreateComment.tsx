import React, { useState } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { createCommentMutation } from "../queries/queries";

interface Props {
  username: string;
  userId: number;
  text: string;
  createCommentMutation: (variables: object) => void;
  successfulReturn: () => void;
}

const CreateComment: React.FC<Props> = (props) => {
  const [validSubmission, setValidSubmission] = useState(true);

  function createComment() {
    let randomVar = Math.floor(Math.random() * 100000);
    if (validSubmission === true) {
      props.createCommentMutation({
        variables: {
          username: props.username,
          userId: props.userId,
          text: props.text,
          commentId: randomVar,
        },
      });
      props.successfulReturn();
    }
  }

  return <button onClick={() => createComment()}>Create</button>;
};

export default compose(
  graphql(createCommentMutation, { name: "createCommentMutation" })
)(CreateComment);
