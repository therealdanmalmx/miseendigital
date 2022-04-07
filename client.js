import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.NEXT_APP_SANITY_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.NEXT_APP_SANITY_TOKEN,
});

const builder = new imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
