"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ImageBanner from "@/components/banner/ImageBanner";
import stylesProduct from "@/styles/global.module.scss";
import ProductCard from "@/components/card/ProductCard";
import { getAllProduct } from "@/utils/product";
import banner from "@/pictures/images/herobanner.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import loadingsvg from "@/pictures/svg/tube-spinner.svg";
import Image from "next/image";
import NavBar from "@/components/navigation/NavBar";
// import styles from "./page.module.css";

export default function Home() {
  const [isLogin, isLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProduct()
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1023,
        settings: "unslick",
      },
    ],
  };

  return (
    <div
      className="sectionHomepage"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <NavBar />
      <ImageBanner image={banner} />
      {/* <div className={stylesProduct['product-grid']}> */}
      {isLoading ? (
        <div
          className=""
          style={{
            height: "100%",
            margin: "auto",
            color: "#121212",
            width: "100%",
            display: "flex",
            maxWidth: "75px",
          }}
        >
          <Image
            src={loadingsvg}
            priority={false}
            width={75}
            height={75}
            alt="placeholder image"
          />
        </div>
      ) : (
        <>
          <div className={stylesProduct["home_collectionList"]}>
            <h3>New Arrivals</h3>
            <Link href="/pages/collection">View All</Link>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              {products.length > 0
                ? products.map((product, index) => (
                    <ProductCard
                      variant={product.variants}
                      productId={product.id}
                      picture={product.images[0].src}
                      title={product.title}
                      key={index}
                    />
                  ))
                : null}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
}
