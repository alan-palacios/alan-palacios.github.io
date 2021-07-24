import NavLink from './nav-link';
import {Link} from 'react-scroll';
const opBrace = '{';
const cloBrace = '}';
//bg-blue-dark shadow-lg
function Navbar() {
  return (
    <div className="select-none fixed top-0 w-full  text-gray-light text-1xl  px-6 py-4 z-10 bg-gradient-to-b from-blue-dark to-transparent 
                    lg:text-2xl ">
      <Link to="Home" spy={true} smooth={true}>
        {opBrace} Alan Palacios {cloBrace}
      </Link>
      <ul className=" ml-8 hidden sm:inline-block">
        <NavLink linkTo="Projects"/>
        <NavLink linkTo="Contact"/>
      </ul>
    </div>

  );
}

export default Navbar;
