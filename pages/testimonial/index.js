import { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import Image from "next/image";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => setTestimonial(data));
  }, []);
  console.log("testimonial", testimonial);

  return (
    <div>
      <h2 className="mb-2 text-center">Testimonials</h2>
      {testimonial.map((testimonial, index) => (
        <>
          {/* <Image
            key={index}
            src={urlFor(testimonial.imgUrl)}
            height={100}
            width={100}
            fill="objectFit"
          /> */}
          <div className="text-center">
            <h2>Feedback: {testimonial.feedback}</h2>
            <p>Name: {testimonial.name}</p>
            <p>Company: {testimonial.company}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Testimonial;
