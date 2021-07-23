import {Link} from 'react-scroll';

function NavLink(props) {
  return (
        <li className="mr-5 inline-block font-light transition duration-200 transform hover:-translate-y-1 select-none">
          <Link to={props.linkTo} spy={true} smooth={true}>
            {props.linkTo}
          </Link>
        </li>
  );
}

export default NavLink;
