import {Link} from 'react-scroll';

function NavLink(props) {
  return (
          <Link to={props.linkTo} spy={true} smooth={true} className="">
        <li className="mr-5 pb-5 inline-block font-light transition duration-200 transform hover:-translate-y-1 select-none">
            {props.linkTo}
        </li>
          </Link>
  );
}

export default NavLink;
