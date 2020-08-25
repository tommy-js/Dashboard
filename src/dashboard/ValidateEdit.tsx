import React from "react";
import SubmitNotification from "../resolvers/SubmitNotification";
import UpdateUserData from "../resolvers/UpdateUserData";

interface Props {
  userId: number;
  content: string;
  money: number;
  accountStatus: string;
  membership: string;
}

const ValidateUserEdit: React.FC<Props> = (props) => {
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

export default ValidateUserEdit;
