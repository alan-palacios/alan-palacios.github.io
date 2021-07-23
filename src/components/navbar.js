import NavLink from './nav-link';
import {Link} from 'react-scroll';
const opBrace = '{';
const cloBrace = '}';
//bg-blue-dark shadow-lg
function Navbar() {
  return (
    <div className="select-none sticky top-0   text-gray-light text-1xl  p-4 z-10 bg-gradient-to-b from-blue-dark to-transparent 
                    md:text-2xl md:p-6">
      <Link to="Home" spy={true} smooth={true}>
        {opBrace} Alan Palacios {cloBrace}
      </Link>
      <ul className=" ml-8 hidden md:inline-block">
        <NavLink linkTo="Projects"/>
        <NavLink linkTo="Contact"/>
      </ul>
    </div>

  );
}

export default Navbar;
