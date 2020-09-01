import React, { useState } from "react";
import { createStockMutation } from "../queries/queries";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";

interface Props {
  name: string;
  ticker: string;
  stockId: number;
  about: string;
  createStockMutation: (variables: object) => void;
  successfulReturn: () => void;
}

const CreateStock: React.FC<Props> = (props) => {
  const [validSubmission, setValidSubmission] = useState(true);

  function createStock() {
    let currentTime = Math.floor(Date.now() / 1000);

    if (validSubmission === true) {
      props.createStockMutation({
        variables: {
          name: props.name,
          ticker: props.ticker,
          stockId: props.stockId,
          about: props.about,
          creation: currentTime,
          prediction: 0,
        },
      });
      props.successfulReturn();
    }
  }

  return <button onClick={() => createStock()}>Create</button>;
};

export default compose(
  graphql(createStockMutation, { name: "createStockMutation" })
)(CreateStock);
