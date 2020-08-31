import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { UserDataRenderer, StockDataRenderer } from "./DataRenderer";

const DashboardContainer: React.FC = () => {
  const [stockEdit, setStockEdit] = useState(false);
  const [editStockData, setEditStockData] = useState({
    title: "",
    ticker: "",
    description: "",
    id: 0,
  });
  const [id, setId] = useState(0);

  function renderUsers() {
    return (
      <Route path="/home/users">
        <UserDataRenderer />
      </Route>
    );
  }

  return (
    <div id="dashboard_container">
      {renderUsers()}
      <Route path="/home/stocks">
        <StockDataRenderer />
      </Route>
    </div>
  );
};

export default DashboardContainer;
