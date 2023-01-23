import "./SoftSkills.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { allSoftSkills } from "../../data/allSoftSkills";

const SoftSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(allSoftSkills);
  }, []);

  return (
    <>
      <h2 className="head-text">Soft Skills</h2>

      <div className="app__soft-skills-container">
        <motion.div className="app__soft-skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__soft-skills-item app__flex"
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
  MotionWrap(SoftSkills, "app__soft-skills"),
  "soft__skills",
  "app__whitebg"
);
