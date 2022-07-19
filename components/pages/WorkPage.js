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
        <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio flex w-full flex-1 flex-row flex-wrap items-center justify-center"
            >
                <Link
                    passHref
                    href={`/works/${work.title.toLowerCase().split(" ").join("-")}`}
                >
                    <div className="app__work-img relative flex w-full items-center">
                        <img
                            className="w-1/3 h-1/3 mx-10 my-5 rounded-lg border-2"
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
                            className="app__work-hover absolute top-0 left-0  border-2  bottom-0 mx-10 my-5 cursor-pointer right-0 w-1/3 rounded bg-black bg-opacity-40 duration-300 ease-in"
                        >
                        </motion.div>
                            <div key={work._id}>
                                <div>
                                    <h4 className="bold-text absolute top-1/2 left-1/2 font-bold text-primary-color">
                                    {work.title}
                                    </h4>
                                    <p className="text-center absolute" style={{ marginTop: 10 }}>
                                    {work.description}
                                    </p>
                                    <div className="app__work-tag absolute top-10 rounded-lg bg-white py-2 px-4 text-base">
                                    <p className="">{work.tags[0]}</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Link>

        </motion.div>
    </div>
  )
}

export default WorkPage;