import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateStockMutation } from "../queries/queries.js";

interface Props {
  updateStockMutation: (variables: object) => void;
  stockId: number;
  description: string;
}

const UpdateStockData: React.FC<Props> = (props) => {
  function submitChanges() {
    props.updateStockMutation({
      variables: {
        stockId: props.stockId,
        description: props.description,
      },
    });
  }

  return <button onClick={() => submitChanges()}>Submit Changes</button>;
};

export default compose(
  graphql(updateStockMutation, { name: "updateStockMutation" })
)(UpdateStockData);
