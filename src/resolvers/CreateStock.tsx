import React from "react";
import { createStockMutation } from "../queries/queries";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";

interface Props {
  name: string;
  ticker: string;
  stockId: number;
  createStockMutation: (variables: object) => void;
}

const CreateStock: React.FC<Props> = (props) => {
  function createStock() {
    props.createStockMutation({
      variables: {
        name: props.name,
        ticker: props.ticker,
        stockId: props.stockId,
      },
    });
  }

  return <button onClick={() => createStock()}>Create</button>;
};

export default compose(
  graphql(createStockMutation, { name: "createStockMutation" })
)(CreateStock);
