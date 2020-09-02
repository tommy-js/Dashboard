import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { createEmployeeMutation } from "../queries/queries";

interface Props {
  username: string;
  employeeId: number;
  permissions: string;
  createEmployeeMutation: (variables: object) => void;
}

const CreateEmployee: React.FC<Props> = (props) => {
  function createEmployee() {
    props.createEmployeeMutation({
      variables: {
        username: props.username,
        employeeId: props.employeeId,
        permissions: props.permissions,
      },
    });
  }

  return <button onClick={() => createEmployee()}>Create</button>;
};

export default compose(
  graphql(createEmployeeMutation, { name: "createEmployeeMutation" })
)(CreateEmployee);
