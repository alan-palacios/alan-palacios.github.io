import React from 'react';
import {Link} from 'react-scroll';

function ButtonIcon(props) {
  const renderLink = () => {
    if (props.href) {
      return(
        <React.Fragment>
          <a href={props.href} target="_blank" rel="noreferrer">
            <img src={props.src} alt="icon" className={`m-auto w-10 ${props.width}`}/>
          </a>
        </React.Fragment>

      )    
    } else {
     return(
        <React.Fragment>
            <Link to={props.linkTo || "/#"} spy={true} smooth={true}>
              <img src={props.src} alt="icon" className={`m-auto w-10 ${props.width}`}/>
            </Link>
        </React.Fragment>

      )     
    }

  };

  return (
        <div className={`transition duration-200 transform hover:-translate-y-1 w-max ${props.classes}`}>
          {renderLink()}
        </div>
  );
}

export default ButtonIcon;
