import { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setactiveFilter] = useState("All");
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1});

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => { 
        setWorks(data);
        setFilterWork(data);
      });
  }, []);

  console.log("work", works);

  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    setanimateCard([{y:100, opacity:0}]);

    setTimeout(() => {
      setanimateCard([{y:0, opacity:1}]);

      if(item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  }

  return (
    <div className="app__works bg-light-color py-10">
      <h1 className="app_about-head-text flex-1 w-full flex-col text-center font-bold md:text-5xl">
          Our Creative Portfolio
      </h1>
      <div className="app__work-filter flex justify-center flex-wrap my-10">
        {['All','UI/UX', 'Web App','Mobile App','React JS'].map((item, index) =>(
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app_work-filter-item flex px-4 py-2 mx-2 rounded-md bg-white text-black font-medium cursor-pointer text-base ease-in duration-300 hover:bg-primary-color hover:text-white ${activeFilter ===  item ? "item-active" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio flex flex-1 w-full flex-col justify-center items-center flex-wrap"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item w-80 flex-col bg-white rounded p-4 m-8 cursor-pointer ease-in duration-300 hover:shadow-lg" key={index}>
            <div className="app__work-img flex items-center w-full relative">
              <img className="w-full h-full rounded-lg object-cover" src={urlFor(work.imgUrl)} alt={work.name} />         
              <motion.div
                whileHover={{opacity: [0,1]}}
                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                className="app__work-hover rounded ease-in duration-300 absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black bg-opacity-40"
              >
              <div className="flex items-center justify-center w-full h-full">
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.25 }}
                    className="mr-2 w-10 h-10 rounded-full text-white bg-black bg-opacity-60 flex items-center justify-center"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.25 }}
                    className="mr-2 w-10 h-10 rounded-full text-white bg-black bg-opacity-60 flex items-center justify-center"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </div>
              </motion.div>
            </div>

            <div className="app__work-content relative flex flex-col justify-center items-center py-4">
                <h4 className="bold-text text-primary-color font-bold">{work.title}</h4>
                <p className="text-center" style={{marginTop: 10}}>{work.description}</p>
                <div className="app__work-tag absolute rounded-lg bg-white -top-6 py-2 px-4 text-base">
                  <p className="">{work.tags[0]}</p>
                </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
};

export default Work;
