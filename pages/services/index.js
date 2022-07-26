import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/future/image";
import Link from "next/link";
import { images } from "../../utils";
import { urlFor, client } from "../../client";

const Services = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      console.log({data});
      setAbouts(data);
    });
  }, []);

  return (
    <>
      {/* Services heading */}
      <div
        className="app__hero flex h-[calc(100vh_-_113px)] h-screen max-w-full flex-col items-start justify-center bg-secondary-color bg-center bg-cover"
        style={{backgroundImage: `url(${images.whatyouwant.src})`}}
      >
        <h1 className="mx-10 max-w-4xl text-left text-5xl font-bold leading-snug text-white md:text-7xl md:leading-tight">
          <span className="text-white">What we do</span>
        </h1>
        <p className="mx-10 text-lg text-white text-left">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
          We're not much for hyperbole, slogans or empty talk. We develop web stuff.
          <span className="block">We are not a full service agency. We focus on a selected few tasks that we try to master.</span>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className="block">We don't sugar-coat anything. You get what you came here to get. Our expertise. </span>
          <span className="mt-4 block"> Period.</span>
        </p>
      </div>
      {/* Services overview */}
      {/* <div className="app__services flex flex-col items-center pt-20">
        <h1 className="app__services-head-text h-96 mb-10 flex-1 flex-col text-center font-bold md:text-5xl">
          What we can do for you
        </h1>
        <p className="app__services-description-text mb-10 w-full px-7 text-center text-base md:w-6/12 md:text-lg">
          No matter what trends come and go, offering something that customers want, in the easiet way possible and with pleasing aesthetics will never go out of style. We focus on getting the basics right for you and your customers.
        </p>
      </div> */}
        {/* Services items */}
        <div className="app__profiles overflow-hidden flex flex-col py-20 cursor-pointer flex-wrap items-center">
          {abouts.map((about, index) => (
            <Link
              passHref
              href={`/services/${about.title.toLowerCase().split(" ").join("-")}`}
              key={about._id}
            >
              <div className="relative overflow-hidden w-[325px] h-96 my-2 md:my-12 md:h-[450px] md:w-[1024px]">
                {about.imgUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${urlFor(about.imgUrl)}`}
                    alt={about.title}
                    className="ease-in-out duration-500 hover:scale-125 peer-hover:scale-125 block relative w-full h-full object-cover"
                  />
                )}
                  <div className="w-2/5 flex flex-col justify-center items-center peer text-sm leading-6 tracking-wide absolute top-0 bg-white right-0 opacity-80 bg-opacity-90 h-full">
                    <p className="mx-10">{about.description}</p>
                  </div>
                  <h2 className="bold-text bg-black z-10 px-4 py-2 absolute bottom-5 left-5 text-white font-bold">
                    {about.title}
                  </h2>
              </div>
            </Link>
          ))}
        </div>
    </>
  );
};

export default Services;
