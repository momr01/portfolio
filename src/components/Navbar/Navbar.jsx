import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
import { sectionsItems } from "../../data/sectionsItems";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <h2>
          M O <span>M R</span>
        </h2> */}
       
          <img src={images.logo1} alt="logo" />
       
      </div>
      <ul className="app__navbar-links">
        {sectionsItems.map((item) => (
          <li key={`link-${item.name}`} className="app__flex p-text">
            <div />
            <a href={`#${item.name}`}>{item.value}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {sectionsItems.map((item) => (
                <li key={item.name}>
                  <a href={`#${item.name}`} onClick={() => setToggle(false)}>
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
