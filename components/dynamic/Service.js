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
        <div className="grid grid-cols-4 grid-rows-2 mx-10 absolute top-2/4 sm:top-1/3">
          <div className="self-center pb-8">
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
          <div className="row-start-2 col-span-3 sm:col-span-2 md:col-span-1 lg:col-span-1 md:w-48 lg:w-56 text-2xl self-center text-center py-3 px-2 text-white bg-black font-bold">{title}</div>
          <div className="row-start-3 col-span-4 sm:col-span-3 md:col-span-3 lg:col-span-2 mt-3 lg:w-96 text-black text-base md:text-2xl lg:text-xl font-semibold">{description}</div>
        </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-[calc(100vh_-_113px)] w-full object-cover"
            src={`${urlFor(imgUrl)}`}
            alt={urlFor(imgUrl)}
          />

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-40">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 grid-rows-1 pb-10 md:pb-10 lg:pb-0">
                <div className="row-span-2 justify-self-center self-center">
                  <Image
                      src={images.design}
                      width={80}
                      height={80}
                      alt={images.design}
                  />
                </div>
                <div className="col-span-2 md:col-span-2 lg:col-span-2">
                  <h2 className="text-4xl font-bold pb-3">Design</h2>
                  <p className="w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi autem ipsa dolore nesciunt doloribus eos id expedita ullam doloremque dicta!</p>
                </div>
          </div> 
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 grid-rows-1 pb-10 md:pb-10 lg:pb-0">
                <div className="row-span-2 justify-self-center self-center">
                  <Image
                      src={images.deploy}
                      width={80}
                      height={80}
                      alt={images.deploy}
                  />
                </div>
                <div className="col-span-2 md:col-span-2 lg:col-span-2">
                  <h2 className="text-4xl font-bold pb-3">Design</h2>
                  <p className="w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi autem ipsa dolore nesciunt doloribus eos id expedita ullam doloremque dicta!</p>
                </div>
          </div> 
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 grid-rows-1 pb-10 md:pb-10 lg:pb-0">
                <div className="row-span-2 justify-self-center self-center">
                  <Image
                      src={images.design}
                      width={80}
                      height={80}
                      alt={images.design}
                  />
                </div>
                <div className="col-span-2 md:col-span-2 lg:col-span-2">
                  <h2 className="text-4xl font-bold pb-3">Design</h2>
                  <p className="w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi autem ipsa dolore nesciunt doloribus eos id expedita ullam doloremque dicta!</p>
                </div>
          </div> 
        </div>

      </div>
    );
  }
}
