import React, { useEffect } from "react";
import { useLazyQuery, graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { searchEmployeeQuery } from "../queries/queries";

interface Props {
  employeeId: number;
  passUpData: (data: object[]) => void;
}

const EmployeeQuerySearchBar: React.FC<Props> = (props) => {
  const [passQuery, { loading, data }] = useLazyQuery(searchEmployeeQuery, {
    variables: { employeeId: props.employeeId },
  });

  useEffect(() => {
    if (data) {
      props.passUpData(data.searchEmployees);
    }
  }, [data]);

  function search() {
    passQuery();
  }

  return <button onClick={() => search()}>Search</button>;
};

export default compose(
  graphql(searchEmployeeQuery, { name: "searchEmployeeQuery" })
)(EmployeeQuerySearchBar);
