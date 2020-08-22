import React from "react";
import DashboardElement from "./DashboardElement";

interface Props {
  data: any;
  returnEditPage: (id: number) => void;
}

const DashboardUserList: React.FC<Props> = (props) => {
  return (
    <div>
      {props.data.map((el: any) => (
        <DashboardElement
          text={el.text}
          id={el.id}
          returnEditPage={props.returnEditPage}
        />
      ))}
    </div>
  );
};

export default DashboardUserList;
