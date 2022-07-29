import { useRouter } from "next/router";
import { urlFor } from "../../client";
import Link from "next/link";
import { images } from "../../utils";
import Image from 'next/image'

import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Service({ about }) {
  console.log({about});
  const { title, description, imgUrl } = about;
  const router = useRouter();

  if (router.isFallback) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  } else {
    return (
      <div>
        <div className="flex items-center text-black hover:text-primary-color absolute bottom-60 mx-10">
          <HiOutlineChevronLeft className="w-6 h-6"/>
            <Link
              passHref
              href="/services"
            >
              <a
                className="text-lg text-black transition duration-300 ease-in-out hover:text-primary-color"
              >
                Services
              </a>
          </Link>
        </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-[calc(100vh_-_113px)] w-full object-cover"
            src={`${urlFor(imgUrl)}`}
            alt={urlFor(imgUrl)}
          />
        <div className="flex flex-col mx-10 ">
          <div className="text-5xl py-2 px-4 text-white bg-black absolute bottom-40 font-bold">{title}</div>
          <div className="mt-3 absolute bottom-24 w-1/3 text-black text-xl font-semibold">{description}</div>
        </div>
          <div className="grid-rows-2 grid-cols-2 items-center w-64 justify-between mt-20 ml-10">
            <Image
                src={images.design}
                width={50}
                height={50}
                alt={images.design}
                className="row-span-1"

            />
            <h2 className="row-span-1 text-5xl font-bold">Design</h2>
            <p className="row-span-2 w-[500px] mt-2 ml-[120px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi autem ipsa dolore nesciunt doloribus eos id expedita ullam doloremque dicta!</p>
            </div>
            <div className="flex items-center w-64 justify-between mt-20 ml-10">
            <Image
                src={images.design}
                width={50}
                height={50}
                alt={images.design}

            />
            <h2 className="text-5xl font-bold">Develop</h2>
            </div>
            <p className="w-[500px] mt-2 ml-[120px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi autem ipsa dolore nesciunt doloribus eos id expedita ullam doloremque dicta!</p>
            <div className="flex items-center w-64 justify-between mt-20 ml-10">
            <Image
                src={images.design}
                width={50}
                height={50}
                alt={images.design}

            />
            <h2 className="text-5xl font-bold">Deploy</h2>
            </div>
            <p className="w-[500px] mt-2 mb-40 ml-[120px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi autem ipsa dolore nesciunt doloribus eos id expedita ullam doloremque dicta!</p>

      </div>
    );
  }
}
