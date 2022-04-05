import Image from 'next/image'
import { images } from "./../utils";
const Navbar = () => {
  return (
    <nav class="app__navbar w-full flex justify-between items-center px-4 py-8 bg-slate-50 backdrop-blur-sm border-slate-100 fixed z-10">
        <div className="app__navbar-logo flex justify-start items-center">
            <Image src={images.logo} alt="logo"/>
        </div>
        <ul className="app__navbar-links">
            {['home', 'about','work','skills','contact'].map((item) => (
                <li className="text-center" key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar