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
          <div className="text-3xl md:text-5xl py-2 px-4 text-white bg-black absolute bottom-40 font-bold">{title}</div>
          <div className="mt-3 absolute bottom-24 w-1/3 text-black text-xl font-semibold">{description}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 py-11">
          <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-1 pb-10 md:pb-0">
                <div className="row-span-2 justify-self-center self-center">
                  <Image
                      src={images.design}
                      width={80}
                      height={80}
                      alt={images.design}
                  />
                </div>
                <div className="col-span-2 md:col-span-3">
                  <h2 className="text-4xl font-bold pb-3">Design</h2>
                  <p className="w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi autem ipsa dolore nesciunt doloribus eos id expedita ullam doloremque dicta!</p>
                </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-1 pb-10 md:pb-0">
                <div className="row-span-2 justify-self-center self-center">
                  <Image
                      src={images.develop}
                      width={80}
                      height={80}
                      alt={images.develop}
                  />
                </div>
                <div className="col-span-2 md:col-span-3">
                  <h2 className="text-4xl font-bold pb-3">Develop</h2>
                  <p className="w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi autem ipsa dolore nesciunt doloribus eos id expedita ullam doloremque dicta!</p>
                </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-1">
                <div className="row-span-2 justify-self-center self-center">
                  <Image
                      src={images.deploy}
                      width={80}
                      height={80}
                      alt={images.deploy}
                  />
                </div>
                <div className="col-span-2 md:col-span-3">
                  <h2 className="text-4xl font-bold pb-3">Deploy</h2>
                  <p className="w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi autem ipsa dolore nesciunt doloribus eos id expedita ullam doloremque dicta!</p>
                </div>
          </div>
        </div>

      </div>
    );
  }
}
