import "./Courses.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import { AppWrap, MotionWrap } from "../../wrapper";
import { allCourses } from "../../data/allCourses";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState([]);
  const [year, setYear] = useState(2023);
  const [active, setActive] = useState(2023);

  const orderData = (data) => {
    const arrayForSort = [...data];

    const sortArray = arrayForSort.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      }
      if (a.year < b.year) {
        return -1;
      }
      return 0;
    });

    return sortArray;
  };

  useEffect(() => {
    setCourses(orderData(allCourses));

    const byDefault = allCourses?.filter(
      (el) => el.year.toString() === year.toString()
    );

    setCourse(byDefault[0]);
  }, [year]);

  const handleYear = (e) => {
    setYear(e.target.textContent);
    setActive(e.target.textContent);

    const chosen = allCourses?.filter((el) => el.year == e.target.textContent);
    setCourse(chosen[0]);
  };

  return (
    <>
      <h2 className="head-text">Courses</h2>

      <div className="app__courses-filter">
        {courses?.map((course, index) => (
          <button
            key={index}
            onClick={handleYear}
            className={`app__courses-filter-item ${
              course.year == active && "item-active"
            }`}
          >
            {course.year}
          </button>
        ))}
      </div>

      <div className="app__courses-container">
        <motion.div className="app__courses-exp-item">
          <div className="app__courses-exp-year">
            <p className="bold-text">
              <span>{year}:</span> {course?.courses?.length}
            </p>
          </div>
        </motion.div>
        <motion.div className="app__courses-exp">
          {course?.courses?.map((each, index) => {
            let word = "";

            for (let i = 0; i < each.skills.length; i++) {
              word += each.skills[i];

              if (i !== each.skills.length - 1) {
                word += " - ";
              }
            }

            return (
              <motion.div className="app__courses-exp-works" key={index}>
                <Tooltip
                  title={word}
                  placement="top"
                  arrow
                  className="exp-tooltip"
                  key={each.name}
                >
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__courses-exp-work"
                    data-tip
                    data-for={each.name}
                  >
                    <h4 className="bold-text">{each.name}</h4>
                    <p className="p-text">{each.platform}</p>
                  </motion.div>
                </Tooltip>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Courses, "app__courses"),
  "courses",
  "app__whitebg"
);
