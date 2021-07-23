import githubIcon from '../images/github@2x.png';
function ProjectCard(props) {
  return (
    <div className="block text-gray-light m-auto group">
      <span className="text-2xl block ">{props.name}</span> 
      <div className="rounded-full  flex bg-cover mt-3 w-60 h-60 overflow-hidden
                      md:w-72 md:h-72"
            style={{backgroundImage: `url(${props.src}`}}>
              <div className="h-full  bg-blue-dark bg-opacity-70 w-full relative flex
                    md:hidden
		                group-hover:flex ">
                    <a href={props.repo} target="_blank" rel="noreferrer">
                      <img alt="github repo" src={githubIcon} className="absolute inset-0 m-auto
                      hover:-translate-y-1 transition duration-200 transform"/>
                    </a>
                    <p className="m-auto mb-0  block p-10 pb-3 align-bottom font-light 
                          md:mb-5 md:text-lg">
                      {props.description}
                    </p>                                

              </div>
      </div>
    </div>
  );
}

export default ProjectCard;
