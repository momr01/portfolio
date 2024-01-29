import "./Courses.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import { AppWrap, MotionWrap } from "../../wrapper";
import { allCourses } from "../../data/allCourses";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState([]);
  const [year, setYear] = useState(2024);
  const [active, setActive] = useState(2024);

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
                    <div className="app_courses-title-course">
                      {each.diploma && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-certificate"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#313bac"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="15" cy="15" r="3" />
                          <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                          <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                          <line x1="6" y1="9" x2="18" y2="9" />
                          <line x1="6" y1="12" x2="9" y2="12" />
                          <line x1="6" y1="15" x2="8" y2="15" />
                        </svg>
                      )}

                      {each.isCompleted && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-checkbox"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#313bac"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <polyline points="9 11 12 14 20 6" />
                          <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                        </svg>
                      )}
                      {(each.diploma ||
                        each.isCompleted) && <div className="space"></div>}

                      <h4 className="bold-text">{each.name}</h4>
                    </div>

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
