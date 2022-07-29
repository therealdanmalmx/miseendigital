import { useState } from "react";
import Link from "next/link";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";
import Image from "next/image";

const  ServicesPage = ({ about }) => {
    const { imgUrl, title, description } = about;
    const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <div>
         <Link
              passHref
              href={`/services/${title.toLowerCase().split(" ").join("-")}`}
            >
              <div className="relative overflow-hidden w-[325px] h-[400px] my-2 md:my-8 md:h-[400px] md:w-[1024px]">
                {about.imgUrl && (
                  <>
                    <div className="w-full h-[200px] md:w-2/5 z-10 flex flex-col peer justify-center items-center text-sm leading-6 tracking-wide opacity-70 absolute top-0 bg-white md:right-0 md:h-full md:top-0 md:opacity-80 bg-opacity-90">
                      <p className="mx-10">{description}</p>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${urlFor(imgUrl)}`}
                      alt={title}
                      className="ease-in-out duration-500 hover:scale-110 peer-hover:scale-110 block relative w-full h-full object-cover"
                    />
                  </>
                )}
                  <h2 className="bold-text bg-black px-4 py-2 peer absolute bottom-5 left-5 text-white font-bold">
                    {title}
                  </h2>
              </div>
            </Link>
    </div>
  )
}

export default ServicesPage;