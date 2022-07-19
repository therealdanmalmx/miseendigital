import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { images } from "../../utils";
import { urlFor, client } from "../../client";

const Services = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
    <div className="app__hero flex h-screen max-w-full flex-col items-start justify-center bg-secondary-color bg-cover bg-center" style={{backgroundImage: `url(${images.sample.src})`}}>
      <h1 className="mb-4 pl-16 max-w-4xl text-left text-5xl font-bold leading-snug text-white md:text-7xl md:leading-tight">
        <span className="text-white">Services</span>
      </h1>
      <p className="mb-8 pl-16 text-lg text-white text-left">
      Lorem ipsum dolor sit amet, duo summo recteque repudiandae ea. Ea utinam accommodare pri, <br />
      an duo explicari interesset theophrastus, eu munere nonumes delicatissimi duo. 
      </p>
    </div>

    <div className="app__services flex flex-col items-center justify-center py-28">
      <h1 className="app__services-head-text mb-5 w-full flex-1 flex-col text-center font-bold md:text-5xl">
        We help your business thrive
      </h1>
      <p className="app__services-description-text mb-10 w-full px-7 text-center text-base md:w-6/12 md:text-lg">
        Transforming business challenges into impactful web- and mobile
        solutions that people love to use every day
      </p>
      <div className="app__profiles flex cursor-pointer flex-wrap items-start justify-center">
        {abouts.map((about, index) => (
          <Link
            href={`/services/${about.title.toLowerCase().split(" ").join("-")}`}
            key={about._id}
          >
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item m-5 flex w-[260px] flex-col items-start justify-start md:w-[300px]"
              key={about.title + index}
            >
              {about.imgUrl && (
                <img
                  className="w-full rounded-xl object-cover"
                  src={urlFor(about.imgUrl)}
                  alt={about.title}
                />
              )}
              <h2 className="bold-text font-bold" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 5 }}>
                {about.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;
