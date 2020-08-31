import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import {
  UserDataRenderer,
  StockDataRenderer,
  CommentDataRenderer,
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
    </div>
  );
};

export default DashboardContainer;
