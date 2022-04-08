import { useState, useEffect } from "react";
import { urlFor, client } from "../../client";

const Work = () => {
  const [work, setWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => setWork(data));
  }, []);

  console.log("work", work);

  return <div className="text-center">Work</div>;
};

export default Work;
