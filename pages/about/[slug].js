import { urlFor, client } from "../../client";
import { useRouter } from "next/router"

export async function getStaticPaths() {
  const query = '*[_type == "abouts" && defined(slug.current)][].slug.current';

  const abouts = await client.fetch(query);
  const paths = abouts.map((slug) => ({
    params: {slug}
  }))

  return {
    paths: paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "abouts" && slug.current == $slug] | order(date desc, _createdAt desc) {
    _id,
    title,
    description,
    slug,
    imgUrl,
  }`;
  
  const abouts = await client.fetch(query, {
    slug: params.slug
  })

  return {
    props: {
      data: {
        abouts,
      },
    },
    revalidate: 600,
  }
}

export default function AboutPage({ data }) {
  console.log(data);
  return (
    <div className="mt-40 text-center text-2xl font-bold">
      {data.abouts[0].title}
      {data.abouts[0].description}
      <img
          className="relative h-48 w-full object-cover transition duration-300 ease-in-out hover:scale-105 md:h-60 md:w-72"
          src={urlFor(data.abouts[0].imgUrl)}
          alt={urlFor(data.abouts[0].imgUrl)}
      />
    </div>
  );
}


