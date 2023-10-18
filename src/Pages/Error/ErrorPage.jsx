import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl text-red-800">Oops!</h1>
      <p>Sorry, this page not found.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'} className="text-3xl text-green-900">Go Home</Link>
    </div>
  );
}