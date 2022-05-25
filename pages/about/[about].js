import { urlFor, client } from "../../client";

export async function getStaticPaths() {
  const query = '*[_type == "abouts" && defined(about.current)][].about.current`]';

  const abouts = await client.fetch(query);

  return {
    paths: abouts.map((about) => ({params: {about}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { about = "" } = context.params;
  const abouts = await client.fetch(`
    *[_type == "abouts" && about.current == $about]
  `, { about })

  return {
    props: { abouts },
  };
}

export default function AboutPage({ about }) {
  
  return (
    <div className="mt-40 text-center text-2xl font-bold">
      {about === "e-commerce"
        ? about.toUpperCase()
        : about.toUpperCase().split("-").join(" ")}
    </div>
  );
}
