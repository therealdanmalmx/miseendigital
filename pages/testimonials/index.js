import { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import Image from "next/image";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => setTestimonials(data));
  }, []);
  console.log("testimonials", testimonials);

  return (
    <div>
      <h2 className="mt-28 mb-8 text-center text-5xl font-bold">
        Testimonials
      </h2>
      {testimonials.map(
        (testimonial, index) => (
          console.log({ testimonial }),
          (
            // testimonial.imgUrl && (
            //   <Image
            //     loader="imgix"
            //     src={urlFor(testimonial.imgUrl)}
            //     height={100}
            //     width={100}
            //     fill="objectFit"
            //     className="mx-auto"
            //   />
            // ),
            <div
              key={index}
              className="mb-8 flex w-full flex-row items-center justify-center text-left"
            >
              <span class="flex flex-col items-center rounded-lg border bg-black shadow-md md:max-w-xl md:flex-row xl:max-w-2xl xl:flex-row">
                <img
                  class="w-2xl h-2xl rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
                  src={urlFor(testimonial.imgUrl)}
                  alt="Testimonal"
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <div>
                    <h5 class="text-gray-900 text-2xl font-bold tracking-tight dark:text-white">
                      {testimonial.name}
                    </h5>
                    <h5 class="text-1xl mb-2 font-bold tracking-tight text-black dark:text-white">
                      {testimonial.company}
                    </h5>
                  </div>
                  <div>
                    <p class="text-gray-700 mt-3 font-normal dark:text-white">
                      {testimonial.feedback}
                    </p>
                  </div>
                </div>
              </span>
            </div>
          )
        )
      )}
    </div>
  );
};

export default Testimonial;
