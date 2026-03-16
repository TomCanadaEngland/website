"use client";

import { PortableText as PortableTextComponent } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: { _ref?: string } | undefined) {
  if (!source?._ref) return null;
  return builder.image(source);
}

const components = {
  types: {
    image: ({ value }: { value: { asset?: { _ref?: string }; alt?: string } }) => {
      const src = value?.asset?._ref ? urlFor({ _ref: value.asset._ref })?.url() : null;
      if (!src) return null;
      return (
        <span className="my-6 block overflow-hidden rounded-xl">
          <img
            src={src}
            alt={value.alt ?? ""}
            className="w-full object-cover"
          />
        </span>
      );
    },
  },
};

export function PortableText({ value }: { value: PortableTextBlock[] }) {
  return (
    <PortableTextComponent value={value} components={components} />
  );
}
