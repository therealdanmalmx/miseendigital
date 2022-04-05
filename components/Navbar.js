import Image from 'next/image'
import { images } from "./../utils";
const Navbar = () => {
  return (
    <nav className="app__navbar w-full flex justify-between items-center px-8 py-4 bg-slate-50 backdrop-blur-sm border-slate-100 fixed z-10">
        <div className="app__navbar-logo flex justify-start items-center ">
            <Image width={90} height={90} src={images.logo} alt="logo"/>
        </div>
        <ul className="app__navbar-links flex-1 flex justify-center items-center">
            {['home', 'about','work','skills','contact'].map((item) => (
                <li className="text-center mx-4 cursor-pointer flex-col" key={`link-${item}`}>
                    <div className="w-1 h-1 bg-transparent" />
                    <a className="text-gray-600 flex-col uppercase font-medium ease-in duration-300" href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar