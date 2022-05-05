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
      <h4 className="mt-28 mb-8 text-center text-5xl font-bold">
        Testimonials
      </h4>
      <div className="md:flex-rows flex flex-col">
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
              <div class="max-w-1/3 mx-2 mb-2 overflow-hidden rounded-xl bg-black shadow-md md:max-w-2xl">
                <div class="md:flex">
                  <div class="md:shrink-0">
                    <img
                      class="relative h-48 w-full object-cover transition ease-out hover:scale-105 hover:duration-500 hover:ease-in md:h-40 md:w-48"
                      src={urlFor(testimonial.imgUrl)}
                      alt={urlFor(testimonial.imgUrl)}
                    />
                  </div>
                  <div class="p-4">
                    <div class="text-indigo-500 text-xl font-semibold uppercase tracking-wide dark:text-white">
                      {testimonial.name}
                    </div>
                    <a
                      href="#"
                      class="mt-1 block text-lg font-medium leading-tight text-black hover:underline dark:text-white"
                    >
                      {testimonial.company}
                    </a>
                    <p class="text-slate-500 mt-2 text-sm dark:text-white ">
                      {testimonial.feedback}
                    </p>
                  </div>
                </div>
              </div>
            )
            // <div
            //   key={testimonial._id}
            //   className="max-w-1/3 align-center mb-2 text-left"
            // >
            //   <span className="mx-4 flex max-w-screen-sm flex-col items-center rounded-lg border bg-black shadow-md md:max-w-xl md:flex-row lg:flex-row xl:max-w-2xl xl:flex-row">
            //     <img
            //       className="h-full max-w-full rounded-t-lg object-cover md:max-w-[45%] md:rounded-none md:rounded-l-lg"
            //       src={urlFor(testimonial.imgUrl)}
            //       alt={urlFor(testimonial.imgUrl)}
            //     />
            //     <div className="flex flex-col justify-between leading-normal">
            //       <div className="py-4 px-2">
            //         <h5 className="text-gray-900 text-2xl font-bold tracking-tight dark:text-white">
            //           {testimonial.name}
            //         </h5>
            //         <h5 className="text-1xl mb-2 font-bold tracking-tight text-black dark:text-white">
            //           {testimonial.company}
            //         </h5>
            //         <p className="text-gray-700 text-md mt-3 font-normal dark:text-white md:text-sm">
            //           {testimonial.feedback}
            //         </p>
            //       </div>
            //     </div>
            //   </span>
            // </div>
          )
        )}
      </div>
    </div>
  );
};

export default Testimonial;
