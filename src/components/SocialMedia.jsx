import { Tooltip } from "@mui/material";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import Cv from "../assets/CV-6-english.pdf";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <Tooltip title={"My GitHub"} placement="right" arrow>
        <div onClick={() => window.open("https://github.com/momr01")}>
          <BsGithub />
        </div>
      </Tooltip>
      <Tooltip title={"My Linkedin"} placement="right" arrow>
        <div
          onClick={() =>
            window.open("https://www.linkedin.com/in/maximilianomontana/")
          }
        >
          <BsLinkedin />
        </div>
      </Tooltip>
      <Tooltip title={"My Whatsapp"} placement="right" arrow>
        <div
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=+5492613016290&text=Hola! Quiero ponerme en contacto. Gracias."
            )
          }
        >
          <BsWhatsapp />
        </div>
      </Tooltip>
      <Tooltip title={"My Resume"} placement="right" arrow>
        <a href={Cv} without="true" rel="noopener noreferrer" target="_blank">
          <div>
            <GiNotebook />
          </div>
        </a>
      </Tooltip>
    </div>
  );
};

export default SocialMedia;
