import React from "react";
import SubmitNotification from "../resolvers/SubmitNotification";
import UpdateUserData from "../resolvers/UpdateUserData";
import UpdateCommentData from "../resolvers/UpdateCommentData";

interface User {
  userId: number;
  content: string;
  money: number;
  accountStatus: string;
  membership: string;
}

interface Comment {
  commentId: number;
  text: string;
  likes: number;
  dislikes: number;
}

export const ValidateUserEdit: React.FC<User> = (props) => {
  return (
    <div>
      <SubmitNotification userId={props.userId} content={props.content} />
      <UpdateUserData
        userId={props.userId}
        membership={props.membership}
        accountStatus={props.accountStatus}
        money={props.money}
      />
    </div>
  );
};

export const ValidateCommentEdit: React.FC<Comment> = (props) => {
  return (
    <div>
      <UpdateCommentData
        commentId={props.commentId}
        text={props.text}
        likes={props.likes}
        dislikes={props.dislikes}
      />
    </div>
  );
};
