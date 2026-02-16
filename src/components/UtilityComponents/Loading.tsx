const LoadingPage = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen">
     <div className="rounded-full border-t-blue-700 border-t-5 border-b-red-500 border-b-5 h-20 w-20 animate-spin"></div>
     <div className="flex text-2xl animate-pulse">Please wait ...</div> 
    </div>
  );
};
export default LoadingPage;
