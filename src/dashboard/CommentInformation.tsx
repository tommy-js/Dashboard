import React from "react";

interface Props {
  likes: number;
  dislikes: number;
  commentId: number;
}

const CommentInformation: React.FC<Props> = (props) => {
  return (
    <div>
      <p>Likes: {props.likes}</p>
      <p>Dislikes: {props.dislikes}</p>
      <p>Comment Id: {props.commentId}</p>
    </div>
  );
};

export default CommentInformation;
