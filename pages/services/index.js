import { useState, useEffect } from "react";
import Image from "next/future/image";
import { images } from "../../utils";
import { client } from "../../client";
import ServicesPage from '../../components/pages/ServicesPage'

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
    <div>
      {/* Services heading */}
      <div
        className="app__hero flex h-screen max-w-full flex-col items-start justify-center bg-secondary-color bg-center bg-cover"
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
        {/* Services items */}
        <div className="app__profiles overflow-hidden flex flex-col py-20 cursor-pointer flex-wrap items-center">
          {abouts.map((about, index) => (
            <ServicesPage
              key={about._id}
              about={about}
            />
          ))}
        </div>
    </div>
  );
};

export default Services;
