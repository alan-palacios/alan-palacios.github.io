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
    <div className=" block text-center align-middle text-gray-light m-auto p-5">
      <span className="text-4xl block sm:text-left md:text-5xl">Projects</span> 
      <div className="mt-20 grid grid-cols-1 gap-20  p-30
                      sm:grid-cols-2 sm:gap-24
                      xl:grid-cols-3 xl:gap-30
                      2xl:grid-cols-4">
        {renderCards}
      </div>
    </div>
  );
}

export default Projects;
