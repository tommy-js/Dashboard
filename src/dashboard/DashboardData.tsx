import React from "react";
import {
  DashboardUserElement,
  DashboardStockElement,
  DashboardCommentElement,
} from "./DashboardElement";

interface Props {
  data: any;
  returnEditPage: (id: number) => void;
}

export const DashboardUserData: React.FC<Props> = (props) => {
  return (
    <div id="dashboard_list">
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

export const DashboardStockData: React.FC<Props> = (props) => {
  return (
    <div>
      {props.data.map((el: any) => (
        <DashboardStockElement
          name={el.name}
          ticker={el.ticker}
          stockId={el.stockId}
        />
      ))}
    </div>
  );
};

export const DashboardCommentData: React.FC<Props> = (props) => {
  return (
    <div>
      {props.data.map((el: any) => (
        <DashboardCommentElement username={el.username} text={el.text} />
      ))}
    </div>
  );
};
