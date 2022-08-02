import Link from "next/link";
import { urlFor } from "../../client";
import Image from "next/future/image";

const  ServicesPage = ({ about }) => {
    const { imgUrl, title, description } = about;

    return (
        <div className="z-0">
            <Link
                passHref
                href={`/services/${title.toLowerCase().split(" ").join("-")}`}
                >
                <div className="relative overflow-hidden w-[325px] h-[400px] my-2 md:my-8 md:h-[400px] md:w-[1024px]">
                    {about.imgUrl && (
                    <>
                        <div className="w-full h-[200px] md:w-2/5 z-10 flex flex-col peer justify-center items-center text-sm leading-6 tracking-wide opacity-70 absolute top-0 bg-white md:right-0 md:h-full md:top-0 md:opacity-80 bg-opacity-90">
                        <p className="mx-10">{description}</p>
                        </div>
                        <Image
                            src={`${urlFor(imgUrl)}`}
                            alt={title}
                            width="5000"
                            height="5000"
                            className="ease-in-out duration-500 hover:scale-110 peer-hover:scale-110 block relative w-full h-full object-cover"
                        />
                    </>
                    )}
                    <h2 className="bold-text bg-black px-4 py-2 peer absolute bottom-5 left-5 text-white font-bold">
                        {title === 'UX UI' ? 'UX/UI' : title}
                    </h2>
                </div>
            </Link>
        </div>
    )
}

export default ServicesPage;