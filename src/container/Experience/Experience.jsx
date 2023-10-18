import "./Experience.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import { AppWrap, MotionWrap } from "../../wrapper";
import { allExp } from "../../data/allExperiences";
import { allEdu } from "../../data/allEducation";
import { allProfessionalQualifications } from "../../data/allProfessionalQualifications";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [qualifications, setQualifications] = useState([]);

  const orderData = (data) => {
    const arrayForSort = [...data];

    const sortArray = arrayForSort.sort((a, b) => {
      if (a.year.start < b.year.start) {
        return 1;
      }
      if (a.year.start > b.year.start) {
        return -1;
      }
      return 0;
    });

    return sortArray;
  };

  useEffect(() => {
    setExperiences(orderData(allExp));
    setEducation(orderData(allEdu));
    setQualifications(allProfessionalQualifications);
  }, []);

  return (
    <>
      <div className="app__exp-container">
        <motion.div className="app__exp-exp">
          <h2 className="head-text">Experience</h2>
          {experiences.map((experience, index) => (
            <motion.div className="app__exp-exp-item" key={index}>
              <div className="app__exp-exp-year">
                <p className="bold-text">
                  {experience.year.start}-{experience.year.end}
                </p>
              </div>
              <motion.div className="app__exp-exp-works">
                {experience.works.map((work) => (
                  <Tooltip
                    title={work.desc}
                    placement="top"
                    arrow
                    className="exp-tooltip"
                    key={work.name}
                  >
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__exp-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                  </Tooltip>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__exp-exp">
          <h2 className="head-text">Formal Education</h2>
          {education.map((edu, index) => (
            <motion.div className="app__exp-exp-item" key={index}>
              <div className="app__exp-exp-year">
                <p className="bold-text">
                  {edu.year.start}-{edu.year.end}
                </p>
              </div>
              <motion.div className="app__exp-exp-works">
                {edu.works.map((work) => (
                  <Tooltip
                    title={work.desc}
                    placement="top"
                    arrow
                    className="exp-tooltip"
                    key={work.name}
                  >
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__exp-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                  </Tooltip>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__exp-exp">
          <h2 className="head-text">Professional Qualifications</h2>
          {qualifications.map((qual, index) => (
            <motion.div className="app__exp-exp-item" key={index}>
              <div className="app__exp-exp-year">
                <p className="bold-text">{qual.type}</p>
              </div>
              <motion.div className="app__exp-exp-works">
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__exp-exp-work"
                  data-tip
                  data-for={qual.title}
                >
                  <h4 className="bold-text">{qual.title}</h4>
                  <p className="p-text">{qual.place}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__exp"),
  "experience__education",
  "app__whitebg"
);
