import "./HardSkills.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { allHardSkills } from "../../data/allHardSkills";

const HardSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(allHardSkills);
  }, []);

  return (
    <>
      <h2 className="head-text">Hard Skills</h2>

      <div className="app__hard-skills-container">
        <motion.div className="app__hard-skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__hard-skills-item app__flex"
              key={index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(HardSkills, "app__hard-skills"),
  "hard__skills",
  "app__whitebg"
);
