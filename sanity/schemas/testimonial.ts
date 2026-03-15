import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
    }),
    defineField({
      name: "authorRole",
      title: "Author Role / Context",
      type: "string",
      description: "e.g. PR applicant, Citizenship applicant",
    }),
    defineField({
      name: "authorImage",
      title: "Author Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "authorName",
      subtitle: "quote",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled testimonial",
        subtitle: subtitle ? subtitle.slice(0, 50) + "…" : "",
      };
    },
  },
});
