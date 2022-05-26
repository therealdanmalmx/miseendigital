import { urlFor, client } from "../../client";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const query = '*[_type == "abouts" && defined(slug.current)][].slug.current';

  const abouts = await client.fetch(query);
  const paths = abouts.map((slug) => ({
    params: { slug },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "abouts" && slug.current == $slug][0] {
    title,
    description,
    imgUrl,
  }`;

  const abouts = await client.fetch(query, {
    slug: params.slug,
  });

  return {
    props: {
      abouts,
    },
    revalidate: 600,
  };
}

export default function AboutPage({ abouts }) {
  const { title, description, imgUrl } = abouts;
  return (
    <div>
      <div className="mt-40 text-center text-5xl font-bold">{title}</div>
      <div className="mt-3 text-center text-xl font-bold">{description}</div>
      <img
        className=" relative mx-auto mt-5 h-48 w-full object-cover transition duration-300 ease-in-out hover:scale-105 md:h-60 md:w-72"
        src={urlFor(imgUrl)}
        alt={urlFor(imgUrl)}
      />
    </div>
  );
}
