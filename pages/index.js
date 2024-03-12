import FooterBanner from "@/components/FooterBanner";
import HeroBanner from "@/components/HeroBanner";
import React from "react";
import { client } from "@/lib/client";
import Product from "@/components/Product";
const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData?.length && bannerData[0]} />
      {/* {console.log(bannerData)} */}
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>inside p tag</p>
      </div>
      <div className="products-container">
        {/* {console.log(products)} */}
        {products?.map((product) => (
          <Product key={product?._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type=="product"]`;
  const products = await client.fetch(query);

  const bannerQuery = `*[_type=="banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
