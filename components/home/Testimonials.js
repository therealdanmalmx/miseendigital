import { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import Image from "next/image";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setcCurrentIndex] = useState(0);

  const scrollTestimonials = (index) => {
    setcCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => setTestimonials(data));
    client.fetch(brandQuery).then((data) => setBrands(data));
  }, []);

  let testimonial = testimonials[currentIndex];
  let testimonialSecond = testimonials[currentIndex + 1];

  return (
    <div className="app__testimonials w-full h-[calc(100vh_-_113px)] flex flex-col justify-center items-center py-28">
      <h4 className="mb-8 text-center text-5xl font-bold">
        What people think of our work
      </h4>
      {testimonials.length && (
        <>
          <div
            key={testimonial._id}
            className="grid grid-cols-1 lg:grid-cols-2"
          >
            <div className="md:mb-10">
              <div className="max-w-1/2 mx-6 mb-4 md:mx-12 md:mb-0 md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0 h-full relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="relative h-48 w-full object-cover rounded-tl-3xl rounded-br-3xl transition duration-500 ease-in-out hover:scale-110 md:h-60 md:w-72"
                      src={urlFor(testimonial.imgUrl)}
                      alt={urlFor(testimonial.imgUrl)}
                      />
                  </div>
                  <div className="flex flex-col justify-around p-4">
                    <div>
                      <div className="text-2xl font-bold capitalize tracking-wide text-black">
                        {testimonial.name}
                      </div>
                      <p className="mt-1 mb-3 block text-xl font-medium leading-tight text-black">
                        {testimonial.company}
                      </p>
                    </div>
                    <p className="text-md mb-6 text-black md:text-sm md:leading-6 ">
                      {testimonial.feedback}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-1/2 mx-6 mb-4 overflow-hidden md:mx-12 md:mb-0 md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0 h-full relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="relative h-48 w-full object-cover rounded-tl-3xl rounded-br-3xl transition duration-500 ease-in-out hover:scale-110 md:h-60 md:w-72"
                      src={urlFor(testimonialSecond.imgUrl)}
                      alt={urlFor(testimonialSecond.imgUrl)}
                      />
                  </div>
                  <div className="flex flex-col justify-between p-4 md:justify-around">
                    <div>
                      <div className="text-2xl font-bold capitalize tracking-wide text-black ">
                        {testimonialSecond.name}
                      </div>
                      <p className="block mb-3 text-xl font-medium leading-tight text-black">
                        {testimonialSecond.company}
                      </p>
                    </div>
                    <p className="text-md mb-0 text-black md:mb-6  md:text-sm md:leading-6">
                      {testimonialSecond.feedback}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="align-center flex w-full cursor-pointer flex-wrap justify-center py-6">
            <span
              className="px-4"
              onClick={() =>
                scrollTestimonials(
                  currentIndex === 0
                    ? testimonials.length - 2
                    : currentIndex - 2
                )
              }
            >
              <HiChevronLeft className="h-10 w-10 hover:text-primary-color" />
            </span>
            <span
              className="px-4"
              onClick={() =>
                scrollTestimonials(
                  currentIndex === testimonials.length - 2
                    ? 0 && 1
                    : currentIndex + 2
                )
              }
            >
              <HiChevronRight className="h-10 w-10 hover:text-primary-color" />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonial;
