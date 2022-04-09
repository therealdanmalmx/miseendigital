import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from "../../utils";
import {urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  console.log(abouts);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {
        setAbouts(data);
      })
  }, [])
  
  return (
    <div className="app__about py-10">
      <h1 className="app__about-head-text mb-5 flex-1 w-full flex-col text-center font-bold md:text-5xl">
          We help your business grow  
      </h1>
      <div className="app__profiles flex justify-center items-start flex-wrap">
            {abouts.map((about, index) =>(
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween'}}
                className="app__profile-item w-[260px] md:w-[400px] flex flex-col items-start justify-start m-5"
                key={about.title + index}
              >
                {about.imgUrl &&
                  <img className="w-full rounded-xl object-cover" src={urlFor(about.imgUrl)} alt={about.title} />
                }
                <h2 className="bold-text font-bold" style={{ marginTop: 20}}>{about.title}</h2>
                <p className="p-text" style={{ marginTop: 5}}>{about.description}</p>
              </motion.div>
            ))}
      </div> 
    </div>  
  );
};

export default About;
