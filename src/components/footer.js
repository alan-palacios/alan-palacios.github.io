import "../fontello/css/fontello.css";
import ButtonIcon from "./button-icon";
import arrowDown from '../images/arrow-down.png';

function Footer() {
  return (
  <div className=" block text-center align-middle text-gray-light p-5 text-sm
          lg:text-base">
      <ButtonIcon classes="m-auto mb-5 rotate-180" src={arrowDown} linkTo="Home"/>
      <span className=" block">
        <i className="icon-code text-md"/>&nbsp; with a mech <i className="icon-keyboard text-lg"/> by&nbsp;
        <a href="https://github.com/alan-palacios" target="_blank" rel="noreferrer" className="bg-gray-light p-1 rounded-sm text-blue-dark">Alan Palacios</a>
        
      </span> 
    </div>
  );
}

export default Footer;
