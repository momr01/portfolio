import "./HardSkills.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { allHardSkills } from "../../data/allHardSkills";

const categories = [
  {
    id: 1,
    title: "Markup",
    name: "markup",
  },
  {
    id: 2,
    title: "Language",
    name: "language",
  },
  {
    id: 3,
    title: "Framework",
    name: "framework",
  },
  {
    id: 4,
    title: "Database",
    name: "database",
  },
  {
    id: 5,
    title: "Software",
    name: "software",
  },
  {
    id: 6,
    title: "Library",
    name: "library",
  },
  {
    id: 7,
    title: "Runtime Environment",
    name: "runtime-environment",
  },
  {
    id: 8,
    title: "Design",
    name: "design",
  },
  {
    id: 9,
    title: "Project Management",
    name: "project-management",
  },
  {
    id: 10,
    title: "Google",
    name: "google",
  },
  {
    id: 11,
    title: "All",
    name: "all",
  },
  {
    id: 12,
    title: "Ide",
    name: "ide",
  },
];

const HardSkills = () => {
  const [skills, setSkills] = useState([]);
  const [filterActive, setFilterActive] = useState("all");

  useEffect(() => {
    setSkills(
      allHardSkills.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
    );
  }, []);

  return (
    <>
      <h2 className="head-text">Hard Skills</h2>

      <div className="app__hard-skills-filter">
        {categories
          .sort((a, b) => {
            let fa = a.title.toLowerCase(),
              fb = b.title.toLowerCase();

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          })
          .map((item, index) => (
            <div
              key={index}
              onClick={() => setFilterActive(item.name)}
              className={`app__hard-skills-filter-item app__flex p-text 
      ${filterActive === item.name ? "item-active" : ""}
             `}
            >
              {item.title}
            </div>
          ))}
      </div>

      <div className="app__hard-skills-container">
        <motion.div className="app__hard-skills-list">
          {skills
            .filter((skill) =>
              filterActive !== "all" ? skill.category === filterActive : skill
            )
            .map((skill, index) => (
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
