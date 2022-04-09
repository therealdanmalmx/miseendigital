import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from "../../utils";

const abouts = [
  { title: 'Marketing Digital', description:'I am a good developer', imgUrl: ''},
  { title: 'Branding', description:'I am a good developer', imgUrl:''},
  { title: 'Web Design', description:'I am a good developer', imgUrl:''},
  { title: 'Web Development', description:'I am a good developer', imgUrl:''},
  { title: 'Mobile Development', description:'I am a good developer', imgUrl:''},
  { title: 'E-commerce', description:'I am a good developer', imgUrl:''}
]

const About = () => {
  return (
    <>
      <h1 className="app_about-head-text flex-1 w-full flex-col text-center pt-20 font-bold md:text-5xl">
          We help your business grow  
      </h1>
        <div className="app__profiles flex justify-center items-start flex-wrap mt-8">
            {abouts.map((about, index) =>(
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween'}}
                className="app__profile-item w-[260px] md:w-[400px] md:h-[300px] flex flex-col items-start justify-start m-5"
                key={about.title + index}
              >
                <Image className="w-full rounded-xl object-cover" src={images.services} alt={about.title} />
                <h2 className="bold-text font-bold" style={{ marginTop: 20}}>{about.title}</h2>
                <p className="p-text" style={{ marginTop: 5}}>{about.description}</p>
              </motion.div>
            ))}
        </div> 
      </>  
  );
};

export default About;
