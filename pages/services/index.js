import { useState, useEffect } from "react";
import { images } from "../../utils";
import { client } from "../../client";
import ServicesPage from "../../components/pages/ServicesPage";

const Services = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div>
      {/* Services heading */}
      <div
        className="app__hero flex h-screen max-w-full flex-col items-start justify-center bg-secondary-color bg-cover bg-center"
        style={{ backgroundImage: `url(${images.whatyouwant.src})` }}
      >
        <h1 className="mx-10 max-w-4xl text-left text-5xl font-bold leading-snug text-white md:text-7xl md:leading-tight">
          <span className="text-white">What we do</span>
        </h1>
        <p className="mx-10 text-left text-lg text-white">
          We&apos;re not much for hyperbole, slogans or empty talk. We develop
          web stuff.
          <span className="block">
            We are not a full service agency. We focus on a selected few tasks
            that we try to master.
          </span>
          <span className="block">
            We don&apos;t sugar-coat anything. You get what you came here to
            get. Our expertise.{" "}
          </span>
          <span className="mt-4 block"> Period.</span>
        </p>
      </div>
      {/* Services items */}
      <div className="app__profiles flex cursor-pointer flex-col flex-wrap items-center overflow-hidden py-20">
        {abouts.map((about, index) => (
          <ServicesPage key={about._id} about={about} />
        ))}
      </div>
    </div>
  );
};

export default Services;
