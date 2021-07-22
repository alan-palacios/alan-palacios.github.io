const ampersan = '&';
function HomeTitle() {
  return (
    <div className=" block text-center align-middle text-gray-light m-auto">
      <span className="text-5xl block">Alan Palacios</span> 
      <div className="flex items-center text-center h-28 mt-6">
        <span className="text-2xl m-auto mr-4 inline-block text-left font-light">
          Full Stack<br/> {ampersan} Game
        </span>
        <span className="h-full inline-block  bg-gray-light w-0.5   text-center "></span>
        <span className="text-2xl m-auto ml-4 inline-block  font-light">
          <span className="">Development</span>
        </span>
      </div>
    </div>
  );
}

export default HomeTitle;
