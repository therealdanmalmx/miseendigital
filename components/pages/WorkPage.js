import { useState } from "react";
import Link from "next/link";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";

import React from 'react'

const  WorkPage = ({ work }) => {
    const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <div>
        <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio flex w-full flex-1 flex-row flex-wrap items-center justify-center"
            >
                <div
                className="app__work-item m-8 w-80 cursor-pointer flex-col rounded bg-white p-4 duration-300 ease-in hover:shadow-lg"
                key={work._id}
            >
                <Link
                    passHref
                    href={`/works/${work.title.toLowerCase().split(" ").join("-")}`}
                >
                <div className="app__work-img relative flex w-full items-center">
                <img
                    className="h-full w-full rounded-lg object-cover"
                    src={urlFor(work.imgUrl)}
                    alt={work.name}
                />
                <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                    }}
                    className="app__work-hover absolute top-0 left-0 bottom-0 right-0 h-full w-full rounded bg-black bg-opacity-40 duration-300 ease-in"
                >
                    <div className="flex h-full w-full items-center justify-center">
                    <a href={work.projectLink} target="_blank" rel="noreferrer"></a>
                    </div>
                </motion.div>
                </div>
                </Link>
                <div className="app__work-content relative flex flex-col items-center justify-center py-4">
                    <h4 className="bold-text font-bold text-primary-color">
                    {work.title}
                    </h4>
                    <p className="text-center" style={{ marginTop: 10 }}>
                    {work.description}
                    </p>
                    <div className="app__work-tag absolute -top-6 rounded-lg bg-white py-2 px-4 text-base">
                    <p className="">{work.tags[0]}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default WorkPage;