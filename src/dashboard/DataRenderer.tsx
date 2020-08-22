import React from "react";
import DashboardEdit from "./DashboardEdit";
import DashboardTopMenu from "./DashboardTopMenu";
import DashboardData from "./DashboardData";

interface Props {
  render: boolean;
  data: any;
  returnEdit: () => void;
}

const DataRenderer: React.FC<Props> = (props) => {
  function pageEdit() {
    if (props.render === true) {
      console.log("user edit");
      return (
        <div>
          <DashboardEdit />
        </div>
      );
    } else {
      return (
        <div>
          <DashboardTopMenu placeholder="Username" />
          <DashboardData returnEditPage={props.returnEdit} data={props.data} />
        </div>
      );
    }
  }
  return <div>{pageEdit()}</div>;
};

export default DataRenderer;
