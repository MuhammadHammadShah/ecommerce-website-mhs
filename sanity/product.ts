import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "description",
      title: "Product Description",
      type: "string",
    },
    {
      name: "price",
      title: "Product price",
      type: "number",
    },
    {
      name: "image",
      title: "Product Image",
      type: "array",
      of: [
        {
          name: "img",
          title: "Image",
          type: "image",
        },
      ],
    },
    {
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
  ],
});
