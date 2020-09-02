import React, { useEffect } from "react";
import { graphql, useLazyQuery } from "react-apollo";
import { flowRight as compose } from "lodash";
import { searchCommentQuery } from "../queries/queries.js";

interface Props {
  commentId: string;
  passUpData: (data: object[]) => void;
}

const QueryCommentSearchBar: React.FC<Props> = (props) => {
  const parsedCommentID = parseInt(props.commentId);
  const [passQuery, { loading, data }] = useLazyQuery(searchCommentQuery, {
    variables: { commentId: parsedCommentID },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      props.passUpData(data.searchComments);
    }
  }, [data]);

  function search() {
    passQuery();
  }

  return <button onClick={() => search()}>Search</button>;
};

export default compose(
  graphql(searchCommentQuery, { name: "searchCommentQuery" })
)(QueryCommentSearchBar);
