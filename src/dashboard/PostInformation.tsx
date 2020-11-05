import React from "react";

interface Props {
  postId: string;
  likes: number;
  dislikes: number;
}

const PostInformation: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.postId}</p>
      <p>{props.likes}</p>
      <p>{props.dislikes}</p>
    </div>
  );
};

export default PostInformation;
