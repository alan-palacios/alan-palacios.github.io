import ButtonIcon from "./button-icon";
import Paragraph from "./paragraph";
import Twitter from "../images/twitter@2x.png";
import LinkedIn from "../images/linkedin@2x.png";
import Github from "../images/github@2x.png";

function Contact() {
  return (
    <div className=" block text-left align-middle text-gray-light ml-8">
      <span className="text-4xl block">Contact Me</span> 
      <div className="ml-0">
        <Paragraph/> 
        <div className="flex mt-5">
          <ButtonIcon classes="mr-6" src={Twitter} href="https://twitter.com/AlanPal12150000"/> 
          <ButtonIcon classes="mr-6" src={LinkedIn} href="https://www.linkedin.com/in/alan-palacios-lugo-8ba80b167/"/> 
          <ButtonIcon classes="mr-6" src={Github} href="https://github.com/alan-palacios"/> 
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
