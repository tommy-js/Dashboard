import React from "react";
import DashboardList from "./DashboardList";

interface Props {
  data: any;
  returnEditPage: (id: number) => void;
}

const DashboardData: React.FC<Props> = (props) => {
  return (
    <div id="dashboard_list">
      <DashboardList data={props.data} returnEditPage={props.returnEditPage} />
    </div>
  );
};

export default DashboardData;
