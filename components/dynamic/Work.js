import { useRouter } from "next/router";
import { urlFor } from "../../client";
import Link from "next/link";
import Image from "next/future/image";

import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Work({ works }) {
  const { title, description, projectLink, imgUrl } = works;
  const router = useRouter();

  // if (router.isFallback) {
  //   return (
  //     <section>
  //       <h1>Loading...</h1>
  //     </section>
  //   );
  // } else {
    return (
      <div className="relative">
        <div className="text-left flex items-center text-white hover:text-primary-color absolute ml-5 top-10">
          <HiOutlineChevronLeft className="w-6 h-6"/>
            <Link href="/works">
              <a
                className="text-lg text-white transition duration-300 ease-in-out hover:text-primary-color"
              >
                Works
              </a>
          </Link>
        </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-[calc(100vh_-_113px)] w-full object-cover"
            src={`${urlFor(imgUrl)}`}
            alt={urlFor(imgUrl)}
          />
        <div className="flex flex-col mx-5 text-white">
          <div className="text-5xl absolute top-48 font-bold">{title}</div>
          <div className="mt-3 absolute top-72 text-xl font-bold">{description}</div>
          <Link
            passHref
            href={projectLink}
          >
            <a className="absolute text-white bottom-72" target="_blank" noreferrer="true" >Project link</a>
          </Link>
        </div>
        <div className="m-16">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad consequuntur rerum, at officia iusto cum nobis ea unde odit molestias, ab nihil perspiciatis officiis magni distinctio quibusdam libero dicta praesentium ex similique voluptates perferendis. Possimus et hic, quam explicabo, corporis laborum facere commodi ratione blanditiis doloremque odit est repudiandae reprehenderit, nostrum necessitatibus! Non eum quae voluptate enim dignissimos at esse, culpa sunt dolor omnis eius obcaecati saepe maxime deserunt vitae, nam delectus? Eveniet porro quis commodi aliquid excepturi ad provident sed architecto ducimus nostrum consequatur laudantium sapiente voluptatibus culpa exercitationem recusandae, vitae praesentium. Hic nihil laboriosam sint, ab velit unde temporibus, corporis saepe ex, quas eius quibusdam ullam. Reprehenderit sed obcaecati maiores inventore fuga ex, reiciendis officia tempora quam. Ipsam obcaecati doloremque pariatur rem! Consectetur, possimus nostrum? Culpa quo officiis quis autem accusantium perferendis sequi mollitia corrupti atque illo totam necessitatibus, laborum ut voluptas pariatur quos esse fugit molestiae nesciunt.
        </div>
      </div>
    );
  }
// }
