import React from "react";
import { client } from "../../sanity/lib/client";

interface IProduct {
  title: string;
  description: string;
  image: string[];
}

export const getProductData = async () => {
  const res = await client.fetch(`
  *[_type=="product"]{
    title,
    description,
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
