import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { deleteEmployeeMutation } from "../queries/queries";

interface Props {
  employeeId: number;
  deleteEmployeeMutation: (variables: object) => void;
}

const DeleteEmployee: React.FC<Props> = (props) => {
  function deleteEmployee() {
    props.deleteEmployeeMutation({
      variables: {
        employeeId: props.employeeId,
      },
    });
  }

  return <button onClick={() => deleteEmployee()}>Delete</button>;
};

export default compose(
  graphql(deleteEmployeeMutation, { name: "deleteEmployeeMutation" })
)(DeleteEmployee);
