import { motion } from "framer-motion";
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
    <div className="app__skills w-full flex-1 flex-col py-28">
      <h1 className="app_skills-head-text my-10 w-full flex-1 flex-col text-center font-bold md:text-5xl">
        Skills and Experience
      </h1>
      <div className="app__skills-container flex items-center justify-center">
        <motion.div className="app__skills-list flex flex-wrap">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item mx-4 flex flex-1 flex-col items-center justify-center"
              key={skill.name}
            >
              <div
                className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-white shadow-md"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  className="h-1/2 w-1/2"
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                />
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
