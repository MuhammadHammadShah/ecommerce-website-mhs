import React from "react";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
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
    <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10">
      {data.map((item) => (
        <div>
          <Image
            width={200}
            height={200}
            alt="images"
            className="max-h-[200px] object-cover object-top"
            src={urlForImage(item.image[0] as IImage).url()}
          />
          <h1>{item.title}</h1>
          <h3>${item.price}</h3>
          <button className="border py-2 px-6 rounded bg-blue-600 text-white">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
