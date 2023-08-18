import React from "react";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";

interface IProduct {
  title: string;
  description: string;
  image: IImage;
  _id: string;
  price: number;
  category: {
    name: string;
  };
}

export const getProductData = async () => {
  const res = await client.fetch(`
  *[_type=="product"]{
    price,
  _id,
      title,
      image,
      category -> {
        name
      }
  }`);
  return res;
};

const Home = async () => {
  const data: IProduct[] = await getProductData();
  console.log(data);

  return (
    <div>
      {data.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <h2>{item.description}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
