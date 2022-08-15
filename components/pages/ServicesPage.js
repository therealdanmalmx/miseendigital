import Link from "next/link";
import { urlFor } from "../../client";
import Image from "next/future/image";

const ServicesPage = ({ about }) => {
  const { imgUrl, title, description } = about;

  return (
    <div className="z-0">
      <Link
        passHref
        href={`/services/${title.toLowerCase().split(" ").join("-")}`}
      >
        <div className="relative my-2 h-[400px] w-[325px] overflow-hidden md:my-8 md:h-[400px] md:w-[1024px]">
          {about.imgUrl && (
            <>
              <div className="peer absolute top-0 z-10 flex h-[200px] w-full flex-col items-center justify-center bg-white bg-opacity-90 text-sm leading-6 tracking-wide opacity-70 md:right-0 md:top-0 md:h-full md:w-2/5 md:opacity-80">
                <p className="mx-10">{description}</p>
              </div>
              <Image
                src={`${urlFor(imgUrl)}`}
                alt={title}
                width="5000"
                height="5000"
                className="relative block h-full w-full object-cover duration-500 ease-in-out hover:scale-110 peer-hover:scale-110"
              />
            </>
          )}
          <h2 className="bold-text peer absolute bottom-5 left-5 bg-black px-4 py-2 font-bold text-white">
            {title === "UX UI" ? "UX/UI" : title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default ServicesPage;
