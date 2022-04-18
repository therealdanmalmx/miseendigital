import { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";

const Work = () => {
  const [work, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setactiveFilter] = useState("all");
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  console.log("work", work);

  const handleWorkFilter = (item) => {};

  return (
    <div className="app__works mt-28 bg-light-color py-10">
      <h1 className="app_about-head-text w-full flex-1 flex-col text-center font-bold md:text-5xl">
        Our Creative Portfolio
      </h1>
      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app_work-filter-item flex ${
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
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item flex" key={index}>
            <div className="app__work-img flex">
              <img src={urlFor(work.imgUrl)} />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
