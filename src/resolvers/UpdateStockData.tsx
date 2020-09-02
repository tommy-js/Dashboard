import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateStockMutation } from "../queries/queries.js";

interface Props {
  stockId: number;
  about: string;
  successfulResolve: () => void;
  updateStockMutation: (variables: object) => void;
}

const UpdateStockData: React.FC<Props> = (props) => {
  function submitChanges() {
    props.updateStockMutation({
      variables: {
        stockId: props.stockId,
        about: props.about,
      },
    });
    props.successfulResolve();
  }

  return <button onClick={() => submitChanges()}>Submit Changes</button>;
};

export default compose(
  graphql(updateStockMutation, { name: "updateStockMutation" })
)(UpdateStockData);
