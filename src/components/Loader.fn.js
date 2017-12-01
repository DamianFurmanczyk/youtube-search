import React from "react";
import { Loader } from "semantic-ui-react";

const LoaderC = ({ text }) => {
  return (
    <Loader active inline="centered">
      {text || "Loading..."}
    </Loader>
  );
};

export default LoaderC;
