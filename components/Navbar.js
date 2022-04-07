import Image from "next/image";
import { images } from "./../utils";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex w-full items-center justify-between border-slate-100 bg-slate-50 px-8 py-4 backdrop-blur-sm">
      <div className="flex items-center justify-start ">
        <Image width={90} height={90} src={images.logo} alt="logo" />
      </div>
      <ul className="flex flex-1 items-center justify-center">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li
            className="mx-4 cursor-pointer flex-col text-center"
            key={`link-${item}`}
          >
            <div className="h-1 w-1 bg-transparent" />
            <a
              className="flex-col font-medium uppercase text-gray-600 duration-300 ease-in"
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
