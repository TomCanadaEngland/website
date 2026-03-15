import { type SchemaTypeDefinition } from "sanity";
import { blockContent } from "./blockContent";
import { post } from "./post";
import { author } from "./author";
import { siteSettings } from "./siteSettings";
import { testimonial } from "./testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, author, siteSettings, testimonial],
};
