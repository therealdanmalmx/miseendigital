import { motion } from "framer-motion";
import ReactToolTip from 'react-tooltip'
import { useState, useEffect } from "react";
import { urlFor, client } from "../../client";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data); 
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

  }, []);

  console.log("experience", experience);
  console.log("skills", skills);

  return (
    <div className="app__skills flex-1 w-full flex-col py-28">
      <h1 className="app_skills-head-text my-10 w-full flex-1 flex-col text-center font-bold md:text-5xl">
        Skills and Experience
      </h1>
      <div className="app__skills-container flex justify-center items-center">
        <motion.div className="app__skills-list flex flex-wrap">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{opacity: [0,1]}}
              transition={{duration: 0.5}}
              className="app__skills-item flex flex-col flex-1 items-center justify-center mx-4"
              key={skill.name}
            >
              <div className="flex items-center w-[90px] h-[90px] justify-center rounded-full bg-white shadow-md" style={{backgroundColor: skill.bgColor}}>
                <img className="w-1/2 h-1/2" src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="mt-2 font-bold">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* <motion.div className="app_skills-exp">
            {experience?.map((experience) => ( 
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p>{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work) =>(
                    <>
                    <motion.div
                    whileInView={{opacity: [0,1]}}
                    transition={{duration: 0.5}}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work.name}
                    >
                      <h4 className="font-bold">{work.name}</h4>
                      <p>{work.company}</p>
                    </motion.div>
                    <ReactToolTip
                      id={work.name}
                      effect="solid"
                      arrowColor="fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactToolTip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </motion.div> */}
      </div>
    </div>
  );
};

export default Skills;
