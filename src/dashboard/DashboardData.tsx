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
    <div className="dashboard_data">
      {props.data.map((el: any) => (
        <DashboardUserElement
          key={el.userId}
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
    <div className="dashboard_data">
      {props.data.map((el: any) => (
        <DashboardStockElement
          key={el.stockId}
          name={el.name}
          ticker={el.ticker}
          stockId={el.stockId}
          about={el.about}
          returnEditPage={props.returnEditPage}
        />
      ))}
    </div>
  );
};

export const DashboardCommentData: React.FC<Props> = (props) => {
  return (
    <div className="dashboard_data">
      {props.data.map((el: any) => (
        <DashboardCommentElement
          key={el.commentId}
          username={el.username}
          text={el.text}
          commentId={el.commentId}
          returnEditPage={props.returnEditPage}
        />
      ))}
    </div>
  );
};
