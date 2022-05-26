import React from "react";
import { useRouter } from "next/router";
import { urlFor } from "../client";

export default function Abouts({ abouts }) {
  const { title, description, imgUrl } = abouts;
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
        <div className="mt-40 text-center text-5xl font-bold">{title}</div>
        <div className="mt-3 text-center text-xl font-bold">{description}</div>
        <img
          className=" relative mx-auto mt-5 h-48 w-full object-cover transition duration-300 ease-in-out hover:scale-105 md:h-60 md:w-72"
          src={urlFor(imgUrl)}
          alt={urlFor(imgUrl)}
        />
      </div>
    );
  }
}
