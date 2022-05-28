import React from "react";
import { useRouter } from "next/router";
import { urlFor } from "../../client";
import Link from "next/link";

import {
  FaChevronLeft,
  FaChevronRight,
  FaStickerMule,
  FaArrowLeft,
  FaArrowRight,
  FaChevronCircleRight,
  FaChevronCircleLeft,
} from "react-icons/fa";

export default function Services({ services }) {
  const { title, description, imgUrl } = services;
  const router = useRouter();

  if (router.isFallback) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="mt-40 text-center text-5xl font-bold">{title}</div>
        <div className="mt-3 text-center text-xl font-bold">{description}</div>
        <img
          className=" relative mx-auto mt-5 h-48 w-full object-cover transition duration-300 ease-in-out hover:scale-105 md:h-60 md:w-72"
          src={urlFor(imgUrl)}
          alt={urlFor(imgUrl)}
        />
        <Link href="/services">
          <FaChevronCircleLeft
            fill="#4f15ed"
            className="mt-4 h-10 w-10 cursor-pointer"
          />
        </Link>
      </div>
    );
  }
}
