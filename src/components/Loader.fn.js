import React from "react";
import { Loader } from "semantic-ui-react";

const LoaderC = ({ text }) => {
  return (
    <div className="flex-center">
      <Loader active inline="centered">
        {text || "Loading..."}
      </Loader>
    </div>
  );
};

export default LoaderC;
