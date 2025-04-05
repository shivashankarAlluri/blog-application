import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
export default Error;