import React, { useEffect, useState, useContext } from "react";
import {
  UserDashboardEdit,
  StockDashboardEdit,
  CommentDashboardEdit,
} from "./DashboardEdit";
import {
  UserCreationPage,
  StockCreationPage,
  CommentCreationPage,
} from "./CreationPage";
import DashboardTopMenu from "./DashboardTopMenu";
import {
  DashboardStockData,
  DashboardUserData,
  DashboardCommentData,
} from "./DashboardData";
import { loginContext } from "../appmain/App";
import { usersQuery, stockQuery, commentQuery } from "../queries/queries.js";
import { useQuery } from "react-apollo";

export const UserDataRenderer: React.FC = () => {
  const { loading, data } = useQuery(usersQuery);
  const [loadedImage, setLoadedImage] = useState(false);
  const [renderData, setRenderData] = useState([
    {
      username: "",
      userId: 0,
      accountStatus: "",
      membership: "",
      money: 0,
      time: 0,
    },
  ]);
  const { loginState, setLoginState } = useContext(loginContext);
  const [userCreation, setUserCreation] = useState(false);
  const [creationParam, setCreationParam] = useState("");
  const [id, setId] = useState(0);
  const [userEdit, setUserEdit] = useState(false);
  const [editData, setEditData] = useState({
    username: "",
    userId: 0,
    accountStatus: "",
    membership: "",
    money: 0,
    time: 0,
  });

  useEffect(() => {
    if (data) {
      setLoadedImage(true);
      setRenderData(data.users);
      console.log(data.users);
    }
  }, [data]);

  function returnUserEdit(id: number) {
    if (data) {
      let val = renderData.find((el) => el.userId === id);
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
              <DashboardTopMenu
                searchbarPlaceholder="User"
                type="User"
                elementPlaceholder="Username"
                createFunc={createUser}
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
  const [stockData, setStockData] = useState([
    {
      name: "",
      ticker: "",
      about: "",
      stockId: 0,
    },
  ]);
  const [editStockData, setEditStockData] = useState({
    name: "",
    ticker: "",
    about: "",
    stockId: 0,
  });
  const [stockEdit, setStockEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    if (data) {
      setStockData(data.stocks);
      console.log(data);
    }
  }, [data]);

  function returnStockEdit(id: number) {
    let val = stockData.find((el) => el.stockId === id);
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
              <DashboardTopMenu
                searchbarPlaceholder="Stock Title"
                type="Stock"
                elementPlaceholder="Title"
                createFunc={createStock}
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
  const [commentData, setCommentData] = useState([
    {
      userId: 0,
      commentId: 0,
      username: "",
      timestamp: 0,
      text: "",
      likes: 0,
      dislikes: 0,
    },
  ]);
  const [editCommentData, setEditCommentData] = useState({
    userId: 0,
    commentId: 0,
    username: "",
    timestamp: 0,
    text: "",
    likes: 0,
    dislikes: 0,
  });
  const [commentEdit, setCommentEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    if (data) {
      setCommentData(data.comments);
      console.log(data);
    }
  }, [data]);

  function returnCommentEdit(id: number) {
    let val = commentData.find((el) => el.commentId === id);
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
                <DashboardTopMenu
                  searchbarPlaceholder="User ID"
                  type="Comment"
                  elementPlaceholder="ID"
                  createFunc={createComment}
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
                <DashboardTopMenu
                  searchbarPlaceholder="User ID"
                  type="Comment"
                  elementPlaceholder="ID"
                  createFunc={createComment}
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
