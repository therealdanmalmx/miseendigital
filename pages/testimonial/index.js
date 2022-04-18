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
      <h2 className="mb-2 text-center">Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={testimonial._id}>
          <div className="text-center">
            <h2>Feedback: {testimonial.feedback}</h2>
            <p>Name: {testimonial.name}</p>
            <p>Company: {testimonial.company}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
