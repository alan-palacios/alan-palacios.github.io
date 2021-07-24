import githubIcon from '../images/github@2x.png';

function ProjectCard(props) {
  const angleDif = 30;//180/props.technologies.length;
  const angleOffset = (180 -(props.technologies.length-1)*30)/2;
  const techReversed = props.technologies.slice(0).reverse();

  const renderTechnologies = techReversed.map((tech, index) => {
    const imgRsrc = require(`../images/devicon/${tech}.svg`).default;
    return(
      <div className="max-w-max absolute inset-0 m-auto flex h-6 translate-y-20" key={index}
              style={{ transform:`rotate(${-angleDif*index -angleOffset}deg) translate(400%)`}}>
        <img alt={`${tech} icon`} src={imgRsrc} 
              className="w-6 m-auto transform filter transition-filter hover:drop-shadow-white  duration-100
                          md:w-7 "
              style={{ transform:`rotate(${angleDif*index +angleOffset}deg) `}}/>
      </div>

    )
  });

  return (
    <div className="block text-gray-light m-auto group font-light">
      <span className="text-2xl block ">{props.name}</span> 
      <div className="rounded-full  flex bg-cover mt-3 w-60 h-60 overflow-hidden
                      md:w-72 md:h-72"
            style={{backgroundImage: `url(${props.src}`}}>
              <div className="h-full  bg-blue-dark bg-opacity-70 w-full relative flex 
                    media-hover:hidden
		                group-hover:flex ">
                    <a href={props.repo} target="_blank" rel="noreferrer">
                      <img alt="github repo" src={githubIcon} className="absolute inset-0 m-auto
                      hover:-translate-y-1 transition duration-200 transform"/>
                    </a>
                    {renderTechnologies}
                    <p className="m-auto mb-0  block p-10 pb-3 align-bottom  
                          md:mb-5 md:text-lg">
                      {props.description}
                    </p>                                

              </div>
      </div>
    </div>
  );
}

export default ProjectCard;
