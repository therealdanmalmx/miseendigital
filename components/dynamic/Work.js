import { useRouter } from "next/router";
import { urlFor } from "../../client";
import Link from "next/link";

import { FaChevronCircleLeft } from "react-icons/fa";
import Footer from "../../components/base/Footer";

export default function Work({ works }) {
  const { title, description, projectLink, codeLink, imgUrl } = works;
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
      <div className="app__hero flex h-screen max-w-full flex-col items-start justify-center bg-secondary-color bg-cover bg-center">
        <div className="mb-4 pl-16 max-w-4xl text-left text-5xl font-bold leading-snug text-white md:text-7xl md:leading-tight">{title}</div>
        <Link
          href={`${codeLink}`}
        >
          <a className="mb-4 pl-16 text-lg text-white text-left">Code link <br/> {codeLink}</a>
        </Link>
        <Link
          href={`${projectLink}`}
        >
          <a className="pl-16 text-lg text-white text-left">Project link <br/> {projectLink}</a>
        </Link>
      </div>
      <div className="app__work-detail flex flex-col items-center justify-center py-28">
         <h1 className="app__work-detail-head-text mb-5 w-full flex-1 flex-col text-center font-bold md:text-5xl">
           About the Project
        </h1>
         <p className="app__work-detail-description-text mb-10 w-full px-7 text-center text-base md:w-6/12 md:text-lg">
           {description}
         </p>
         <img
          className="relative mx-auto mt-5 h-full w-[500px] object-cover transition duration-300 ease-in-out md:h-[1000px] md:w-[800px]"
          src={urlFor(imgUrl)}
          alt={urlFor(imgUrl)}
        />
        <Link href="/works">
          <FaChevronCircleLeft
            fill="#4f15ed"
            className="mt-4 h-10 w-10 cursor-pointer hover:contrast-200"
          />
        </Link>
      </div>
      <Footer />
      </>
    );
  }
}
