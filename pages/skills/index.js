import { useState, useEffect } from "react";
import { urlFor, client } from "../../client";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => setSkills(data));
  }, []);

  console.log("skills", skills);

  return <div className="mt-28 text-center">Skills</div>;
};

export default Skills;
