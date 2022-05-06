import { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import Image from "next/image";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

  console.log("testimonials", testimonials);

  let testimonial = testimonials[currentIndex];
  let testimonialSecond = testimonials[currentIndex + 1];

  console.log({ testimonial });
  return (
    <>
      <h4 className="mt-28 mb-8 text-center text-5xl font-bold">
        Testimonials
      </h4>
      {testimonials.length && (
        <>
          <div className="flex flex-col justify-center md:flex-row">
            <div>
              <div class="max-w-1/2 mx-6 mb-4 overflow-hidden rounded-xl bg-light-color shadow-md md:mx-12 md:mb-0 md:max-w-2xl">
                <div class="md:flex">
                  <div class="md:shrink-0">
                    <img
                      class="relative h-48 w-full object-cover transition duration-300 ease-in-out hover:scale-105 md:h-60 md:w-72"
                      src={urlFor(testimonial.imgUrl)}
                      alt={urlFor(testimonial.imgUrl)}
                    />
                  </div>
                  <div class="flex flex-col justify-around p-4">
                    <div>
                      <div class="text-2xl font-semibold uppercase tracking-wide text-primary-color ">
                        {testimonial.name}
                      </div>
                      <p class="mt-1 block text-xl font-medium leading-tight text-black">
                        {testimonial.company}
                      </p>
                    </div>
                    <p class="text-md mb-6 text-black  md:text-sm ">
                      {testimonial.feedback}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="max-w-1/2 mx-6 mb-4 overflow-hidden rounded-xl bg-light-color shadow-md md:mx-12 md:mb-0 md:max-w-2xl">
                <div class="md:flex">
                  <div class="md:shrink-0">
                    <img
                      class="relative h-48 w-full object-cover transition duration-300 ease-in-out hover:scale-105 md:h-60 md:w-72"
                      src={urlFor(testimonialSecond.imgUrl)}
                      alt={urlFor(testimonialSecond.imgUrl)}
                    />
                  </div>
                  <div class="flex flex-col justify-between p-4 md:justify-around">
                    <div>
                      <div class="text-2xl font-semibold uppercase tracking-wide text-primary-color ">
                        {testimonialSecond.name}
                      </div>
                      <p class="block text-xl font-medium leading-tight text-black">
                        {testimonialSecond.company}
                      </p>
                    </div>
                    <p class="text-md mb-0 text-black md:mb-6  md:text-sm ">
                      {testimonialSecond.feedback}
                    </p>
                  </div>
                </div>
              </div>
              <div>Hello</div>
              <span
                className="btns"
                onClick={() =>
                  scrollTestimonials(
                    currentIndex === 0
                      ? testimonials.length - 1 && testimonials.length - 2
                      : currentIndex - 2
                  )
                }
              >
                <FaChevronLeft />
              </span>
              <span
                className="btns"
                onClick={() =>
                  scrollTestimonials(
                    currentIndex === testimonials.length - 1 &&
                      testimonials.length - 2
                      ? 0 && 1
                      : currentIndex + 2
                  )
                }
              >
                <FaChevronRight />
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Testimonial;
