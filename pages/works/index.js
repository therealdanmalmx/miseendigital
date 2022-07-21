import { useState, useEffect } from "react";
import { client } from "../../client";
import WorkPage from '../../components/pages/WorkPage'

const Works = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setactiveFilter] = useState("All");
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    setanimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setanimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className="app__works mt-12 bg-light-color py-28">
      <h1 className="app_about-head-text w-full flex-1 flex-col text-center font-bold md:text-5xl">
        Our Creative Portfolio
      </h1>
      <div className="app__work-filter my-8 flex flex-wrap justify-center">
        {["All", "UX/UI", "Web Development", "E-commerce"].map(
          (item) => (
            <div
              key={item}
              onClick={() => handleWorkFilter(item)}
              className={`app_work-filter-item mx-2 flex cursor-pointer rounded-md bg-white px-4 py-2 text-base font-medium text-black duration-300 ease-in hover:bg-primary-color hover:text-white
              ${activeFilter === item ? "item-active" : ""}`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <div className="flex justify-center">
        <div className="app__work-portfolio grid gap-6 justify-items-center lg:grid-cols-2 grid-cols-1">
          {filterWork.map((work) => (
            <div key={work._id}>
              <WorkPage work={work} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
