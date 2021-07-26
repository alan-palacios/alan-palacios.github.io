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
      <div className="rounded-full m-auto flex bg-cover mt-3 w-60 h-60 overflow-hidden relative
                      md:w-72 md:h-72">
              <video autoPlay loop muted  playsInline  className="-z-10 absolute inset-0 max-w-none h-full">
                <source src={props.src} type="video/mp4"/>
                Your Browser does not support video tag
              </video>
              <div className="h-full  bg-blue-dark bg-opacity-70 w-full relative flex 
                    media-hover:hidden
		                group-hover:flex ">
                    <a href={props.repo} target="_blank" rel="noreferrer">
                      <img alt="github repo" src={githubIcon} className="absolute inset-x-0 top-16 m-auto w-12
                      md:top-20 md:w-14
                      hover:-translate-y-1 transition duration-200 transform"/>
                    </a>
                    {renderTechnologies}
                    <div className="flex mt-28  py-5 px-12 h-32 max-h-32
                                    md:mt-32 md:h-36 md:max-h-36
                                    xl:px-10">
                      <p className="m-auto   
                            md:text-lg lg:text-xl">
                        {props.description}
                      </p>
                    </div>
              </div>
      </div>
    </div>
  );
}

export default ProjectCard;
