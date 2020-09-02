import React, { useEffect } from "react";
import { graphql, useLazyQuery } from "react-apollo";
import { flowRight as compose } from "lodash";
import { searchStockQuery } from "../queries/queries.js";

interface Props {
  ticker: string;
  searchStockQuery: (variables: object) => void;
}

const QueryStockSearchBar: React.FC<Props> = (props) => {
  const [passQuery, { loading, data }] = useLazyQuery(searchStockQuery, {
    variables: { ticker: props.ticker },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  function search() {
    passQuery();
  }

  return <button onClick={() => search()}>Search</button>;
};

export default compose(graphql(searchStockQuery, { name: "searchStockQuery" }))(
  QueryStockSearchBar
);
