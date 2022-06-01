import Link from "next/link";
const Services = () => {
  return (
    <div className="app__works flex-1 flex-col bg-light-color py-28 text-center">
      <h1 className="app_about-head-text w-full font-bold md:text-5xl">
        Services
      </h1>
      <Link href="/services">
        <button
          type="button"
          className="mx-auto mt-5 bg-primary-color text-center text-white transition duration-300 ease-in-out hover:bg-black hover:text-white"
        >
          See all services
        </button>
      </Link>
    </div>
  );
};

export default Services;
