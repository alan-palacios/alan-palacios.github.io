const ampersan = '&';
function HomeTitle() {
  return (
    <div className=" block text-center align-middle text-gray-light m-auto">
      <span className="text-4xl block 
                        sm:text-5xl xl:text-6xl 2xl:text-7xl">Alan Palacios</span> 
      <div className="flex items-center text-center h-28 mt-6 text-xl 
                        sm:text-2xl xl:text-3xl ">
        <span className=" m-auto mr-4 inline-block text-left font-light">
          Full Stack<br/> {ampersan} Game
        </span>
        <span className="h-20 inline-block  bg-gray-light w-0.5   text-center xl:h-24"></span>
        <span className=" m-auto ml-4 inline-block  font-light">
          <span className="">Development</span>
        </span>
      </div>
    </div>
  );
}

export default HomeTitle;
