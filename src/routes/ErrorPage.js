import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div class="error-page-container" style={{"display":"inline-block","position":"absolute","top":"50%","left":"50%","translate":"-50% -50%","font-size":"2rem"}}>
      <h1>Ey there, bud</h1>
      <p>Looks like an error, bud. Better fix this one fast, bud.</p>
      <code>
        Error: {error.statusText || error.message}
      </code>
    </div>
  );
};

export default ErrorPage;