import "./Work.scss";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { allWorks } from "../../data/allWorks";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { RiForbid2Fill } from "react-icons/ri";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    setWorks(allWorks.filter((work) => work.show));
    setFilterWork(allWorks.filter((work) => work.show));
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
        setPage(1);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
        setPage(1);
      }
    }, 500);
  };

  /**
   * Paginación
   */
  const { width } = useWindowDimensions();
  const [number, setNumber] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [itemsPerPage, setItemsPerPage] = useState([0, 1, 2]);

  useEffect(() => {
    if (width >= 2000) {
      setNumber(4);
    } else if (width >= 1440) {
      setNumber(3);
    } else if (width >= 1024) {
      setNumber(2);
    } else {
      setNumber(filterWork.length);
    }
  }, [filterWork, width]);

  useEffect(() => {
    const total = Math.round(filterWork.length / number);
    setTotalPages(total);
  }, [filterWork, number]);

  useEffect(() => {
    const changeItems = () => {
      const lastIndex = page * number;
      const firstIndex = lastIndex - number;

      const arrayIndexes = [];

      for (let i = firstIndex; i < lastIndex; i++) {
        arrayIndexes.push(i);
      }

      setItemsPerPage(arrayIndexes);
    };

    changeItems();
  }, [page, number]);

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["Web App", "MERN", "Java", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {width >= 1024 &&
          (page === 1 ? (
            <div className="app__flex not-allowed-btn">
              <RiForbid2Fill />
            </div>
          ) : (
            <div
              className="app__flex arrow-prev-next-btn"
              onClick={() => setPage((prev) => prev - 1)}
            >
              <HiChevronLeft />
            </div>
          ))}

        {filterWork.map(
          (work, index) =>
            itemsPerPage.includes(index) && (
              <div className="app__work-item app__flex" key={index}>
                <div className="app__work-img app__flex">
                  <img src={work.imgUrl} alt={work.name} />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__work-hover app__flex"
                  >
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>
                <div className="app__work-content app__flex">
                  <h4 className="bold-text">{work.title}</h4>
                  <p className="p-text" style={{ marginTop: 10 }}>
                    {work.description}
                  </p>

                  <div className="app__work-tag app__flex">
                    <p className="p-text">{activeFilter}</p>
                  </div>
                </div>
              </div>
            )
        )}
        {width >= 1024 &&
          (page === totalPages ? (
            <div className="app__flex not-allowed-btn">
              <RiForbid2Fill />
            </div>
          ) : (
            <div
              className="app__flex arrow-prev-next-btn"
              onClick={() => setPage((prev) => prev + 1)}
            >
              <HiChevronRight />
            </div>
          ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
