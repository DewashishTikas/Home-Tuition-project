// LoadingFallback.jsx
const LoadingFallback = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="text-center">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
        <p className="text-gray-500">
          Please wait while we fetch the user details.
        </p>
      </div>
    </div>
  );
};

export default LoadingFallback;
