export const product = {
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
  ],
};
