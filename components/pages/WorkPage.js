import { useState } from "react";
import Link from "next/link";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";
import Image from "next/image";

const WorkPage = ({ work }) => {
  const { imgUrl } = work;
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <div>
      <Link
        passHref
        href={`/works/${work.title.toLowerCase().split(" ").join("-")}`}
      >
        <div className="app__work-img relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="h-64 w-[22rem] sm:h-96 sm:w-[36rem] lg:h-72 lg:w-[30rem] xl:h-96 xl:w-[36rem]">
            <Image
              className="cursor-pointer object-cover"
              src={`${urlFor(imgUrl)}`}
              alt={work.name}
              width={16}
              height={9}
              layout="fill"
            />
          </div>
          <motion.img
            animate={{
              x: 0,
              y: 0,
              scale: 1.2,
              rotate: 0,
            }}
            className="app__work-hover scale-110 duration-300 ease-in"
          ></motion.img>
          <div key={work._id}>
            <div>
              <p
                className="absolute top-14 left-6 text-white"
                style={{ marginTop: 10 }}
              >
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
  );
};

export default WorkPage;
