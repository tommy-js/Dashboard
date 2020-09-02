import React, { useEffect } from "react";
import { graphql, useLazyQuery } from "react-apollo";
import { flowRight as compose } from "lodash";
import { searchUserQuery } from "../queries/queries.js";

interface Props {
  username: string;
  passUpData: (data: object[]) => void;
}

const QueryUserSearchBar: React.FC<Props> = (props) => {
  const [passQuery, { loading, data }] = useLazyQuery(searchUserQuery, {
    variables: { username: props.username },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      props.passUpData(data.searchUsers);
    }
  }, [data]);

  function search() {
    passQuery();
  }

  return <button onClick={() => search()}>Search</button>;
};

export default compose(graphql(searchUserQuery, { name: "searchUserQuery" }))(
  QueryUserSearchBar
);
