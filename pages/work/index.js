import { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setactiveFilter] = useState("All");
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  console.log("work", works);

  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    setanimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setanimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className="app__works mt-28 bg-light-color py-10">
      <h1 className="app_about-head-text w-full flex-1 flex-col text-center font-bold md:text-5xl">
        Our Creative Portfolio
      </h1>
      <div className="app__work-filter my-10 flex flex-wrap justify-center">
        {["All", "UI/UX", "Web App", "E-commerce", "Next JS"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app_work-filter-item mx-2 flex cursor-pointer rounded-md bg-white px-4 py-2 text-base font-medium text-black duration-300 ease-in hover:bg-primary-color hover:text-white ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio flex w-full flex-1 flex-col flex-wrap items-center justify-center"
      >
        {filterWork.map((work, index) => (
          <div
            className="app__work-item m-8 w-80 cursor-pointer flex-col rounded bg-white p-4 duration-300 ease-in hover:shadow-lg"
            key={index}
          >
            <div className="app__work-img relative flex w-full items-center">
              <img
                className="h-full w-full rounded-lg object-cover"
                src={urlFor(work.imgUrl)}
                alt={work.name}
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover absolute top-0 left-0 bottom-0 right-0 h-full w-full rounded bg-black bg-opacity-40 duration-300 ease-in"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-60 text-white"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-60 text-white"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="app__work-content relative flex flex-col items-center justify-center py-4">
              <h4 className="bold-text font-bold text-primary-color">
                {work.title}
              </h4>
              <p className="text-center" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag absolute -top-6 rounded-lg bg-white py-2 px-4 text-base">
                <p className="">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
