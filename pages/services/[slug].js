import { client } from "../../client";
import Service from "../../components/dynamic/Service";

export async function getStaticPaths() {
  const query = '*[_type == "abouts" && defined(slug.current)][].slug.current';

  const abouts = await client.fetch(query);
  const paths = abouts.map((slug) => {
    return {
      params: {
        slug,
      },
    };
  });

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
    revalidate: 3600,
  };
}

export default function AboutPage({ abouts }) {
  return (
    <div>
      <Service services={abouts} />
    </div>
  );
}
