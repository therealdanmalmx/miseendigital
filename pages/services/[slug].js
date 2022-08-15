import { client } from "../../client";
import Service from "../../components/dynamic/Service";

export async function getStaticPaths() {
  const query =
    '*[_type == "services" && defined(slug.current)][].slug.current';

  const services = await client.fetch(query);
  const paths = services.map((slug) => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "services" && slug.current == $slug][0] {
    title,
    description,
    imgUrl,
    typeofservice,
  }`;

  const services = await client.fetch(query, {
    slug: params.slug,
  });

  return {
    props: {
      services,
    },
    revalidate: 3600,
  };
}

export default function ServicesPage({ services }) {
  return (
    <div>
      <Service services={services} />
    </div>
  );
}
