import React, { useState } from "react";
import ElementTitle from "./ElementTitle";
import ElementOptions from "./ElementOptions";
import ElementCheckbox from "./ElementCheckbox";
import ButtonField from "../login/ButtonField";
import StringDisplay from "./StringDisplay";
import SubHeader from "../privileges/SubHeader";
import DeleteStock from "../resolvers/DeleteStock";
import DeleteComment from "../resolvers/DeleteComment";
import DeleteUser from "../resolvers/DeleteUser";
import DeleteEmployee from "../resolvers/DeleteEmployee";
import CommentInformation from "./CommentInformation";
import PermissionsLink from "./PermissionsLink";

interface User {
  username: string;
  userId: number;
  money: number;
  returnEditPage: (id: number) => void;
}

interface Stock {
  name: string;
  ticker: string;
  stockId: number;
  about: string;
  returnEditPage: (id: number) => void;
}

interface Comment {
  username: string;
  text: string;
  likes: number;
  dislikes: number;
  commentId: number;
  returnEditPage: (id: number) => void;
}

interface Employee {
  employeeId: number;
  username: string;
  permissions: string;
  password: string;
  returnEditPage: (id: number) => void;
}

interface Props {
  postId: string;
  text: string;
  title: string;
  likes: number;
  dislikes: number;
}

export const DashboardUserElement: React.FC<User> = (props) => {
  const [check, setCheck] = useState(false);
  const [markedForDeletion, setMarkedForDeletion] = useState(false);
  const [deleted, setDeleted] = useState(false);

  function triggerCheck(check: boolean) {
    setCheck(check);
    console.log(check);
  }

  function actionElement() {
    console.log("action");
  }

  function modMark(id: number) {
    setMarkedForDeletion(!markedForDeletion);
  }

  function deleteState() {
    setDeleted(true);
  }

  function changeOnMark() {
    if (deleted === false) {
      if (markedForDeletion === false) {
        return (
          <div>
            <ElementTitle text={props.username} />
            <StringDisplay label="Money" insert={props.money} />
            <ElementOptions action={actionElement} />
            <ElementCheckbox check={check} triggerCheck={triggerCheck} />
            <ButtonField
              text="Edit"
              id={props.userId}
              submitForm={props.returnEditPage}
            />
            <ButtonField
              text="Mark for deletion"
              id={props.userId}
              submitForm={modMark}
            />
          </div>
        );
      } else {
        return (
          <div>
            <ElementTitle text={props.username} />
            <ButtonField text="Unmark" id={props.userId} submitForm={modMark} />
            <DeleteUser userId={props.userId} deleteState={deleteState} />
          </div>
        );
      }
    } else {
      return (
        <div>
          <h3>Deleted</h3>
        </div>
      );
    }
  }

  return (
    <div className="dashboard_element" key={props.userId}>
      {changeOnMark()}
    </div>
  );
};

export const DashboardStockElement: React.FC<Stock> = (props) => {
  const [markedForDeletion, setMarkedForDeletion] = useState(false);
  const [deleted, setDeleted] = useState(false);

  function modMark(id: number) {
    setMarkedForDeletion(!markedForDeletion);
  }

  function deleteState() {
    setDeleted(true);
  }

  function changeOnMark() {
    if (deleted === false) {
      if (markedForDeletion === false) {
        return (
          <div>
            <ElementTitle text={`${props.name} #${props.ticker}`} />
            <SubHeader text={props.about} />
            <ButtonField
              text="Edit"
              id={props.stockId}
              submitForm={props.returnEditPage}
            />
            <ButtonField
              text="Mark for deletion"
              id={props.stockId}
              submitForm={modMark}
            />
          </div>
        );
      } else if (markedForDeletion === true) {
        return (
          <div>
            <ElementTitle text={`${props.name} #${props.ticker}`} />
            <ButtonField
              text="Unmark"
              id={props.stockId}
              submitForm={modMark}
            />
            <DeleteStock stockId={props.stockId} deleteState={deleteState} />
          </div>
        );
      }
    } else {
      return (
        <div>
          <h2>Deleted</h2>
        </div>
      );
    }
  }

  return (
    <div className="dashboard_element" key={props.stockId}>
      {changeOnMark()}
    </div>
  );
};

export const DashboardCommentElement: React.FC<Comment> = (props) => {
  const [markedForDeletion, setMarkedForDeletion] = useState(false);
  const [deleted, setDeleted] = useState(false);

  function modMark(id: number) {
    setMarkedForDeletion(!markedForDeletion);
  }

  function deleteState() {
    setDeleted(true);
  }

  function changeOnMark() {
    if (deleted === false) {
      if (markedForDeletion === false) {
        return (
          <div>
            <ElementTitle text={props.text} />
            <CommentInformation
              likes={props.likes}
              dislikes={props.dislikes}
              commentId={props.commentId}
            />
            <ButtonField
              text="Edit"
              id={props.commentId}
              submitForm={props.returnEditPage}
            />
            <ButtonField
              text="Mark for deletion"
              id={props.commentId}
              submitForm={modMark}
            />
          </div>
        );
      } else if (markedForDeletion === true) {
        return (
          <div>
            <ElementTitle text={props.text} />
            <ButtonField
              text="Unmark"
              id={props.commentId}
              submitForm={modMark}
            />
            <DeleteComment
              commentId={props.commentId}
              deleteState={deleteState}
            />
          </div>
        );
      }
    } else {
      return (
        <div>
          <h3>Deleted</h3>
        </div>
      );
    }
  }

  return (
    <div className="dashboard_element" key={props.commentId}>
      {changeOnMark()}
    </div>
  );
};

export const DashboardEmployeeElement: React.FC<Employee> = (props) => {
  const [markedForDeletion, setMarkedForDeletion] = useState(false);
  const [deleted, setDeleted] = useState(false);

  function modMark(id: number) {
    setMarkedForDeletion(!markedForDeletion);
  }

  function deleteState() {
    setDeleted(true);
  }

  function changeOnMark() {
    if (deleted === false) {
      if (markedForDeletion === false) {
        return (
          <div>
            <ElementTitle text={props.username} />
            <PermissionsLink permissions={props.permissions} />
            <ButtonField
              text="Edit"
              id={props.employeeId}
              submitForm={props.returnEditPage}
            />
            <ButtonField
              text="Mark for deletion"
              id={props.employeeId}
              submitForm={modMark}
            />
          </div>
        );
      } else if (markedForDeletion === true) {
        return (
          <div>
            <ElementTitle text={props.username} />
            <ButtonField
              text="Unmark"
              id={props.employeeId}
              submitForm={modMark}
            />
            <DeleteEmployee
              employeeId={props.employeeId}
              deleteState={deleteState}
            />
          </div>
        );
      }
    } else {
      return (
        <div>
          <h3>Deleted</h3>
        </div>
      );
    }
  }

  return (
    <div className="dashboard_element" key={props.employeeId}>
      {changeOnMark()}
    </div>
  );
};

export const DashboardPostElement: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
};
