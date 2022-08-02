import { useRouter } from "next/router";
import { urlFor } from "../../client";
import Link from "next/link";
import { images } from "../../utils";
import Image from 'next/future/image'
import TypeOfServices from './TypeOfServices'

import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Service({ about }) {
  const { title, description, imgUrl, typeofservice } = about;
  const router = useRouter();

  if (router.isFallback) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  } else {
    return (
      <>
        <div className="grid grid-cols-4 grid-rows-2 mx-10 absolute bottom-20">
          <div className="flex self-center pb-10">
            <div>
              <HiOutlineChevronLeft className="w-6 h-6"/>
            </div>
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
          <div className="row-start-2 col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-2 md:w-full lg:w-full text-3xl md:text-5xl self-center text-center py-3 px-2 text-white bg-black font-bold">{title}</div>
          <div className="row-start-3 col-span-4 sm:col-span-3 md:col-span-3 lg:col-span-2 mt-3 lg:w-96 text-black text-base md:text-2xl lg:text-xl font-semibold">{description}</div>
        </div>
          <Image
            className="h-[calc(100vh_-_113px)] w-full object-cover"
            src={`${urlFor(imgUrl)}`}
            alt={urlFor(imgUrl)}
            width="5000"
            height="5000"
          />

          {!typeofservice && undefined}
          <div className="grid grid-cols-1 lg:grid-cols-3 py-12">
            {typeofservice && typeofservice.map((service) => (
              
                <TypeOfServices
                  key={service._key}
                  service={service}
                />
              
            ))}
          </div>
      </>
      );
      }
    }
