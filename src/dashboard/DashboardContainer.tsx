import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import {
  UserDataRenderer,
  StockDataRenderer,
  CommentDataRenderer,
  ReportDataRenderer,
  EmployeeDataRenderer,
  PostsDataRenderer,
} from "./DataRenderer";

const DashboardContainer: React.FC = () => {
  return (
    <div id="dashboard_container">
      <Route path="/home/users">
        <UserDataRenderer />
      </Route>
      <Route path="/home/stocks">
        <StockDataRenderer />
      </Route>
      <Route path="/home/comments">
        <CommentDataRenderer />
      </Route>
      <Route path="/home/reports">
        <ReportDataRenderer />
      </Route>
      <Route path="/home/employees">
        <EmployeeDataRenderer />
      </Route>
      <Route path="/home/posts">
        <PostsDataRenderer />
      </Route>
    </div>
  );
};

export default DashboardContainer;
