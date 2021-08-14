import ButtonIcon from "./button-icon";
import Paragraph from "./paragraph";
import LinkedIn from "../images/linkedin@2x.png";
import Github from "../images/github@2x.png";

function Contact() {
  return (
    <div className=" block text-left align-middle text-gray-light px-8
                      sm:px-14
                      md:px-20 
                      lg:px-24 
                      xl:px-30 
                      2xl:px-36">
      <span className="text-4xl block sm:text-left md:text-5xl">Contact</span> 
      <div className="ml-0">
        <Paragraph/> 
        <div className="flex mt-5">
          <ButtonIcon classes="mr-6" width="lg:w-12" src={LinkedIn} href="https://www.linkedin.com/in/alan-palacios-lugo-8ba80b167/"/> 
          <ButtonIcon classes="mr-6" width="lg:w-12" src={Github} href="https://github.com/alan-palacios"/> 
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
