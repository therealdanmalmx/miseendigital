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
                    className="w-[22rem] h-64 sm:w-[36rem] sm:h-96 lg:w-[30rem] lg:h-72 xl:w-[36rem] xl:h-96 object-cover"
                    src={urlFor(imgUrl)}
                    alt={work.name}
                />
                <motion.img
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1.2,
                        rotate: 0,
                    }}
                    className="app__work-hover scale-110 duration-300 ease-in"
                >
                </motion.img>
                <div key={work._id}>
                    <div>
                        <p className="top-14 text-white left-6 absolute" style={{ marginTop: 10 }}>
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