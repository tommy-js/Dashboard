import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateEmployeeMutation } from "../queries/queries";

interface Props {
  employeeId: number;
  permissions: string;
  successfulResolve: () => void;
  updateEmployeeMutation: (variables: object) => void;
}

const UpdateEmployeeData: React.FC<Props> = (props) => {
  function updateEmployee() {
    props.updateEmployeeMutation({
      variables: {
        employeeId: props.employeeId,
        permissions: props.permissions,
      },
    });
    props.successfulResolve();
  }

  return <button onClick={() => updateEmployee()}>Update</button>;
};

export default compose(
  graphql(updateEmployeeMutation, { name: "updateEmployeeMutation" })
)(UpdateEmployeeData);
