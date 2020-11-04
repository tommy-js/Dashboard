import React, { useEffect } from "react";
import { useLazyQuery } from "react-apollo";
import { searchPostQuery } from "../queries/queries.js";

interface Props {
  postId: string;
  passUpData: (data: object[]) => void;
}

const PostQuerySearchBar: React.FC<Props> = (props) => {
  const [passQuery, { loading, data }] = useLazyQuery(searchPostQuery, {
    variables: { postId: props.postId },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      props.passUpData(data.searchStocks);
    }
  }, [data]);

  function search() {
    passQuery();
  }

  return <button onClick={() => search()}>Search</button>;
};

export default PostQuerySearchBar;
