import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("Error occurred:", error);
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>Please try again later.</p>
      <h3>
        {error.status} {error.statusText}
      </h3>
    </div>
  );
};

export default Error;
