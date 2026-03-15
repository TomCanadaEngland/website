import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      description: "Used in browser tab and SEO.",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 2,
      description: "Default meta description for the site.",
    }),
    defineField({
      name: "ogImage",
      title: "Default OG Image",
      type: "image",
      description: "Default share image for social.",
    }),
    defineField({
      name: "appStoreUrl",
      title: "App Store URL",
      type: "url",
    }),
    defineField({
      name: "googlePlayUrl",
      title: "Google Play URL",
      type: "url",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
});
