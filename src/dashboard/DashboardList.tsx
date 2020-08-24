import React from "react";
import { DashboardUserElement } from "./DashboardElement";

interface Props {
  data: any;
  returnEditPage: (id: number) => void;
}

const DashboardUserList: React.FC<Props> = (props) => {
  return (
    <div>
      {props.data.map((el: any) => (
        <DashboardUserElement
          username={el.username}
          userId={el.userId}
          money={el.money}
          returnEditPage={props.returnEditPage}
        />
      ))}
    </div>
  );
};

export default DashboardUserList;
