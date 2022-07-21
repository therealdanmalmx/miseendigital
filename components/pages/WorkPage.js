import { useState } from "react";
import Link from "next/link";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";
import Image from "next/image";

const  WorkPage = ({ work }) => {
    const { imgUrl } = work;
    console.log(imgUrl)
    const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <div>
        <Link
            passHref
            href={`/works/${work.title.toLowerCase().split(" ").join("-")}`}
        >
            <div className="app__work-img relative">
                <img
                    className="w-[28rem] h-72 my-5 mx-2 object-cover"
                    src={urlFor(imgUrl)}
                    alt={work.name}
                />
                <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                    }}
                    className="app__work-hover absolute inset-0 bottom-0 ml-2 cursor-pointer right-0 w-96 rounded bg-black bg-opacity-40 duration-300 ease-in"
                >
                </motion.div>
                <div key={work._id}>
                    <div>
                        <p className="top-20 left-16 absolute" style={{ marginTop: 10 }}>
                            {work.description}
                        </p>
                        <div className="app__work-tag absolute top-4 left-6 bg-white py-2 px-4 text-base">
                            <p className="">{work.tags[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default WorkPage;