import { client } from "../../client";
import Work from "../../components/dynamic/Work";

export async function getStaticPaths() {
  const query = '*[_type == "works" && defined(slug.current)][].slug.current';

  const works = await client.fetch(query);
  console.log({ works });
  const paths = works.map((slug) => {
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
  const query = `*[_type == "works" && slug.current == $slug][0] {
    title,
    shortdescription,
    longdescription,
    projectLink,
    imgUrl,
  }`;

  const works = await client.fetch(query, {
    slug: params.slug,
  });

  return {
    props: {
      works,
    },
    revalidate: 3600,
  };
}

export default function WorksPage({ works }) {
  return (
    <div>
      <Work works={works} />
    </div>
  );
}
