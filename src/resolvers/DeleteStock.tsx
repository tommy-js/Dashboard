import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { deleteStockMutation } from "../queries/queries.js";

interface Props {
  stockId: number;
  deleteStockMutation: (variables: object) => void;
  deleteState: () => void;
}

const DeleteStock: React.FC<Props> = (props) => {
  function deleteStock() {
    props.deleteState();
    props.deleteStockMutation({
      variables: {
        stockId: props.stockId,
      },
    });
  }

  return (
    <div>
      <button onClick={() => deleteStock()}>Delete</button>
    </div>
  );
};

export default compose(
  graphql(deleteStockMutation, { name: "deleteStockMutation" })
)(DeleteStock);
