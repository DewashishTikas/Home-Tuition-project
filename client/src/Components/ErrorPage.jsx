import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
      {error?.statusText || error?.message ? (
        <p className="text-gray-700 italic">
          Something went wrong. Kindly refresh or contact the owner
        </p>
      ) : null}
      <a href="/" className="mt-6 text-blue-500 underline hover:text-blue-700">
        Go back to Home
      </a>
    </div>
  );
}
