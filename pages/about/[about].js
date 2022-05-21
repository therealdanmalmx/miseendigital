import { urlFor, client } from "../../client";

export default function AboutPage({ about }) {
  return (
    <div className="mt-40 text-center text-2xl font-bold">
      {about === "e-commerce"
        ? about.toUpperCase()
        : about.toUpperCase().split("-").join(" ")}
    </div>
  );
}

export async function getStaticPaths() {
  const query = '*[_type == "abouts"]';

  const abouts = await client.fetch(query);

  const paths = abouts.map((about) => {
    about = String(about.title.toLowerCase().split(" ").join("-"));

    return {
      params: {
        about,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const about = params.about;

  return {
    props: { about },
  };
}
