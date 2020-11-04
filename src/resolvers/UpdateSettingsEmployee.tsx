import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateSettingsEmployeeMutation } from "../queries/queries";

interface Props {
  employeeId: number;
  username: string;
  permissions: string;
  password: string;
  updateSettingsEmployeeMutation: (variables: object) => void;
}

const UpdateSettingsEmployee: React.FC<Props> = (props) => {
  function updateEmployee() {
    props.updateSettingsEmployeeMutation({
      variables: {
        employeeId: props.employeeId,
        username: props.username,
        permissions: props.permissions,
        password: props.password,
      },
    });
  }

  return <button onClick={() => updateEmployee()}>Save</button>;
};

export default compose(
  graphql(updateSettingsEmployeeMutation, {
    name: "updateSettingsEmployeeMutation",
  })
)(UpdateSettingsEmployee);
