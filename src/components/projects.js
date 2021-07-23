import ProjectCard from "./projects-card";
import projectData from "../data/projects-data.json";
function Projects() {
  const renderCards = projectData.map((data) => {
    const imgRsrc = require(`../images/previews/${data.imgSrc}`).default;
    return(
      <ProjectCard {...data} src={imgRsrc} key={data.name}/>
    )
  });

  return (
    <div className=" block text-center align-middle text-gray-light m-auto mt-20">
      <span className="text-5xl block ">Projects</span> 
      <div className="mt-10 grid grid-cols-1 gap-10">
        {renderCards}
      </div>
    </div>
  );
}

export default Projects;
