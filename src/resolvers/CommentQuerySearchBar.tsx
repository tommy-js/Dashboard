import React, { useEffect } from "react";
import { graphql, useLazyQuery } from "react-apollo";
import { flowRight as compose } from "lodash";
import { searchCommentQuery } from "../queries/queries.js";

interface Props {
  commentId: string;
}

const QueryCommentSearchBar: React.FC<Props> = (props) => {
  const [passQuery, { loading, data }] = useLazyQuery(searchCommentQuery, {
    variables: { commentId: props.commentId },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  function search() {
    let parsedCommentID = parseInt(props.commentId);
    passQuery();
  }

  return <button onClick={() => search()}>Search</button>;
};

export default compose(
  graphql(searchCommentQuery, { name: "searchCommentQuery" })
)(QueryCommentSearchBar);
