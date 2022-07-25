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
    <div className="app__services flex flex-col items-center justify-center py-28">
    <h1 className="app__services-head-text mb-10 h-96 flex-1 flex-col text-center font-bold md:text-5xl">
      What we can do for you
    </h1>
    <p className="app__services-description-text mb-10 w-full px-7 text-center text-base md:w-6/12 md:text-lg">
      No matter what trends come and go, offering something that customers want, in the easiet way possible and with pleasing aesthetics will never go out of style. We focus on getting the basics right for you and your customers.
    </p>
    <div className="app__profiles overflow-x-hidden overflow-y-hidden flex cursor-pointer flex-wrap items-start justify-center">
      {abouts.map((about, index) => (
        <Link
          passHref
          href={`/services/${about.title.toLowerCase().split(" ").join("-")}`}
          key={about._id}
        >
          <div className="relative overflow-hidden w-[325px] h-96">
            {about.imgUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`${urlFor(about.imgUrl)}`}
                alt={about.title}
                className="ease-in-out duration-500 hover:scale-125 block relative w-full h-full object-cover"
              />
            )}
              <h2 className="bold-text bg-black p-2 absolute bottom-5 left-5 text-white font-bold">
                {about.title}
              </h2>
          </div>
        </Link>
      ))}
    </div>
  </div>
  );
};

export default Services;
