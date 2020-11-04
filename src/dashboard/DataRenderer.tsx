import React, { useEffect, useState, useContext } from "react";
import {
  UserDashboardEdit,
  StockDashboardEdit,
  CommentDashboardEdit,
  EmployeeDashboardEdit,
} from "./DashboardEdit";
import {
  UserCreationPage,
  StockCreationPage,
  CommentCreationPage,
  EmployeeCreationPage,
} from "./CreationPage";
import {
  DashboardStockTopMenu,
  DashboardUserTopMenu,
  DashboardCommentTopMenu,
  DashboardEmployeeTopMenu,
} from "./DashboardTopMenu";
import {
  DashboardStockData,
  DashboardUserData,
  DashboardCommentData,
  DashboardEmployeeData,
} from "./DashboardData";
import { loginContext } from "../appmain/App";
import {
  usersQuery,
  stockQuery,
  commentQuery,
  employeeQuery,
} from "../queries/queries.js";
import { useQuery } from "react-apollo";

export const UserDataRenderer: React.FC = () => {
  const { loading, data } = useQuery(usersQuery);
  const [loadedImage, setLoadedImage] = useState(false);
  const [renderData, setRenderData] = useState([] as any);
  const { loginState, setLoginState } = useContext(loginContext);
  const [userCreation, setUserCreation] = useState(false);
  const [creationParam, setCreationParam] = useState("");
  const [id, setId] = useState(0);
  const [userEdit, setUserEdit] = useState(false);
  const [editData, setEditData] = useState({} as any);

  useEffect(() => {
    if (data) {
      setLoadedImage(true);
      setRenderData(data.users);
      console.log(data.users);
    }
  }, [data]);

  function passUpData(data: any) {
    setRenderData(data);
  }

  function returnUserEdit(id: number) {
    if (data) {
      let val = renderData.find((el: any) => el.userId === id);
      if (val) {
        let index = renderData.indexOf(val);
        let obj = renderData[index];
        setEditData({
          username: obj.username,
          accountStatus: obj.accountStatus,
          membership: obj.membership,
          time: obj.time,
          userId: obj.userId,
          money: obj.money,
        });
      }
    }
    setId(id);
    setUserEdit(true);
    console.log("passed user");
  }

  function exitFormUsers() {
    setUserEdit(false);
  }

  function createUser(val: string) {
    setUserCreation(true);
    setCreationParam(val);
  }

  function exitUserCreation() {
    setUserCreation(false);
  }

  function pageEdit() {
    if (userCreation === true) {
      return (
        <div>
          <UserCreationPage
            username={creationParam}
            exitUserCreation={exitUserCreation}
          />
        </div>
      );
    } else if (userCreation === false) {
      if (userEdit === true) {
        return (
          <div>
            <UserDashboardEdit
              editData={editData}
              id={id}
              exitForm={exitFormUsers}
            />
          </div>
        );
      } else {
        if (data) {
          return (
            <div>
              <DashboardUserTopMenu
                searchbarPlaceholder="User"
                type="User"
                elementPlaceholder="Username"
                createFunc={createUser}
                passUpData={passUpData}
              />
              <DashboardUserData
                returnEditPage={returnUserEdit}
                data={renderData}
              />
            </div>
          );
        } else {
          return (
            <div>
              <h2>Loading...</h2>
            </div>
          );
        }
      }
    }
  }
  return <div>{pageEdit()}</div>;
};

export const StockDataRenderer: React.FC = () => {
  const { loading, data } = useQuery(stockQuery);
  const [stockCreation, setStockCreation] = useState(false);
  const [creationParam, setCreationParam] = useState("");
  const [stockData, setStockData] = useState([] as any);
  const [editStockData, setEditStockData] = useState({} as any);
  const [stockEdit, setStockEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    if (data) {
      setStockData(data.stocks);
      console.log(data);
    }
  }, [data]);

  function returnStockEdit(id: number) {
    let val = stockData.find((el: any) => el.stockId === id);
    if (val) {
      let index = stockData.indexOf(val);
      let obj = stockData[index];
      setEditStockData({
        name: obj.name,
        ticker: obj.ticker,
        about: obj.about,
        stockId: obj.stockId,
      });
    }
    setId(id);
    setStockEdit(true);
  }

  function exitFormStock() {
    setStockEdit(false);
  }

  function createStock(val: string) {
    setStockCreation(true);
    setCreationParam(val);
  }

  function exitStockCreation() {
    setStockCreation(false);
  }

  function passUpData(data: any) {
    setStockData(data);
  }

  function pageEdit() {
    if (stockCreation === true) {
      return (
        <div>
          <StockCreationPage
            title={creationParam}
            exitStockCreation={exitStockCreation}
          />
        </div>
      );
    } else if (stockCreation === false) {
      if (stockEdit === true) {
        console.log("user edit");
        return (
          <div>
            <StockDashboardEdit
              editData={editStockData}
              id={id}
              exitForm={exitFormStock}
            />
          </div>
        );
      } else {
        if (data) {
          return (
            <div>
              <DashboardStockTopMenu
                searchbarPlaceholder="Stock Title"
                type="Stock"
                elementPlaceholder="Title"
                createFunc={createStock}
                passUpData={passUpData}
              />
              <DashboardStockData
                returnEditPage={returnStockEdit}
                data={stockData}
              />
            </div>
          );
        } else {
          return (
            <div>
              <h2>Loading...</h2>
            </div>
          );
        }
      }
    }
  }
  return <div>{pageEdit()}</div>;
};

export const CommentDataRenderer: React.FC = () => {
  const { loading, data } = useQuery(commentQuery);
  const [commentCreation, setCommentCreation] = useState(false);
  const [creationParam, setCreationParam] = useState("");
  const [commentData, setCommentData] = useState([] as any);
  const [editCommentData, setEditCommentData] = useState({} as any);
  const [commentEdit, setCommentEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    if (data) {
      setCommentData(data.comments);
      console.log(data);
    }
  }, [data]);

  function returnCommentEdit(id: number) {
    let val = commentData.find((el: any) => el.commentId === id);
    if (val) {
      let index = commentData.indexOf(val);
      let obj = commentData[index];
      setEditCommentData({
        userId: obj.userId,
        commentId: obj.commentId,
        username: obj.username,
        timestamp: obj.timestamp,
        text: obj.text,
        likes: obj.likes,
        dislikes: obj.dislikes,
      });
    }
    setId(id);
    setCommentEdit(true);
  }

  function exitFormComment() {
    setCommentEdit(false);
  }

  function createComment(val: string) {
    setCommentCreation(true);
    setCreationParam(val);
  }

  function exitCommentCreation() {
    setCommentCreation(false);
  }

  function passUpData(data: any) {
    setCommentData(data);
  }

  function pageEdit() {
    if (commentCreation === true) {
      return (
        <div>
          <CommentCreationPage
            username={creationParam}
            exitCommentCreation={exitCommentCreation}
          />
        </div>
      );
    } else if (commentCreation === false) {
      if (commentEdit === true) {
        console.log("user edit");
        return (
          <div>
            <CommentDashboardEdit
              editData={editCommentData}
              id={id}
              exitForm={exitFormComment}
            />
          </div>
        );
      } else {
        if (data) {
          if (commentData) {
            return (
              <div>
                <DashboardCommentTopMenu
                  searchbarPlaceholder="User ID"
                  type="Comment"
                  elementPlaceholder="ID"
                  createFunc={createComment}
                  passUpData={passUpData}
                />
                <DashboardCommentData
                  returnEditPage={returnCommentEdit}
                  data={commentData}
                />
              </div>
            );
          } else {
            return (
              <div>
                <DashboardCommentTopMenu
                  searchbarPlaceholder="User ID"
                  type="Comment"
                  elementPlaceholder="ID"
                  createFunc={createComment}
                  passUpData={passUpData}
                />
              </div>
            );
          }
        } else {
          return (
            <div>
              <h2>Loading...</h2>
            </div>
          );
        }
      }
    }
  }
  return <div>{pageEdit()}</div>;
};

export const ReportDataRenderer: React.FC = () => {
  return (
    <div>
      <h2>Reports go here...</h2>
    </div>
  );
};

export const EmployeeDataRenderer: React.FC = () => {
  const [creationParam, setCreationParam] = useState("");
  const { loading, data } = useQuery(employeeQuery);
  const [employeeEdit, setEmployeeEdit] = useState(false);
  const [employeeCreation, setEmployeeCreation] = useState(false);
  const [employeeData, setEmployeeData] = useState([] as any);

  const [editEmployeeData, setEditEmployeeData] = useState({} as any);
  const [id, setId] = useState(0);

  function returnEmployeeEdit(id: number) {
    let val = employeeData.find((el: any) => el.employeeId === id);
    if (val) {
      let index = employeeData.indexOf(val);
      let obj = employeeData[index];
      setEditEmployeeData({
        username: obj.username,
        permissions: obj.permissions,
        employeeId: obj.employeeId,
        password: obj.password,
      });
    }
    setId(id);
    setEmployeeEdit(true);
  }

  useEffect(() => {
    if (data) {
      console.log(data);
      setEmployeeData(data.employees);
    }
  }, [data]);

  function exitFormEmployee() {
    setEmployeeEdit(false);
  }

  function createEmployee(val: string) {
    setEmployeeCreation(true);
    setCreationParam(val);
  }

  function exitEmployeeCreation() {
    setEmployeeCreation(false);
  }

  function passUpData(data: any) {
    setEmployeeData(data);
  }

  function pageEdit() {
    if (employeeCreation === true) {
      return (
        <div>
          <EmployeeCreationPage
            employeeId={creationParam}
            exitEmployeeCreation={exitEmployeeCreation}
          />
        </div>
      );
    } else if (employeeCreation === false) {
      if (employeeEdit === true) {
        console.log("user edit");
        return (
          <div>
            <EmployeeDashboardEdit
              editData={editEmployeeData}
              id={id}
              exitForm={exitFormEmployee}
            />
          </div>
        );
      } else {
        if (data) {
          if (employeeData) {
            return (
              <div>
                <DashboardEmployeeTopMenu
                  searchbarPlaceholder="Employee ID"
                  type="Employee"
                  elementPlaceholder="Employee ID"
                  createFunc={createEmployee}
                  passUpData={passUpData}
                />
                <DashboardEmployeeData
                  returnEditPage={returnEmployeeEdit}
                  data={employeeData}
                />
              </div>
            );
          } else {
            return null;
          }
        } else {
          return (
            <div>
              <h2>Loading...</h2>
            </div>
          );
        }
      }
    }
  }

  return <div>{pageEdit()}</div>;
};

export const PostsDataRenderer: React.FC = () => {
  return <div></div>;
};
