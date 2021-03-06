import {Link} from 'react-scroll';
function ButtonOutline(props) {
  return (
      <div className={`text-center text-xl align-middle select-none text-gray-light border w-max m-auto rounded-lg pl-2 pr-2 pt-1 pb-1 mt-20
          transition duration-200
       hover:bg-gray-light hover:text-blue-dark ${props.classes}`}>
          <Link to={props.linkTo || "/#"} spy={true} smooth={true}>
            <span className=" block font-light">See Projects</span> 
          </Link>
      </div>
  );
}

export default ButtonOutline;
