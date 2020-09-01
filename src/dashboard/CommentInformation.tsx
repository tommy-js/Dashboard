import React from "react";

interface Props {
  likes: number;
  dislikes: number;
}

const CommentInformation: React.FC<Props> = (props) => {
  return (
    <div>
      <p>Likes: {props.likes}</p>
      <p>Dislikes: {props.dislikes}</p>
    </div>
  );
};

export default CommentInformation;
