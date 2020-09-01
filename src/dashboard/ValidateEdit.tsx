import React from "react";
import SubmitNotification from "../resolvers/SubmitNotification";
import UpdateUserData from "../resolvers/UpdateUserData";
import UpdateCommentData from "../resolvers/UpdateCommentData";
import UpdateStockData from "../resolvers/UpdateStockData";

interface User {
  userId: number;
  content: string;
  money: number;
  accountStatus: string;
  membership: string;
  successfulResolve: () => void;
}

interface Comment {
  commentId: number;
  text: string;
  likes: number;
  dislikes: number;
  successfulResolve: () => void;
}

interface Stock {
  stockId: number;
  about: string;
  successfulResolve: () => void;
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
        successfulResolve={props.successfulResolve}
      />
    </div>
  );
};

export const ValidStockEdit: React.FC<Stock> = (props) => {
  return (
    <div>
      <UpdateStockData
        stockId={props.stockId}
        about={props.about}
        successfulResolve={props.successfulResolve}
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
        successfulResolve={props.successfulResolve}
      />
    </div>
  );
};
