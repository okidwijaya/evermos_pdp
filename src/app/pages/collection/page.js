"use client";
import ProductCard from "@/components/card/ProductCard";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/navigation/NavBar";
import CollectionBanner from "@/components/card/CollectionBanner";
import { getAllProduct } from "@/utils/product";
import loadingsvg from "@/pictures/svg/tube-spinner.svg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconComponent from "@/components/icon/IconComponents";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <IconComponent
        name="MdOutlineArrowForwardIos"
        size="20px"
        color="#121212"
        className=""
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <IconComponent
        name="IoMdSettings"
        size="20px"
        color="#121212"
        className=""
      />
    </div>
  );
}

function Page() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <NavBar />
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
          <div style={{ marginBottom: "2rem" }}>
            <CollectionBanner />
          </div>

          <button type="button" style={{ backgroundColor:'transparent', marginLeft: 'auto', marginRight: '0', border: 'none', fontSize: '16px', marginBottom: '2rem',display: 'flex',gap: '0.5rem',justifyContent: 'flex-end',flexDirection: 'row',flexWrap: 'nowrap',alignItems: 'center' }}>
            <p>Filter</p>
            <IconComponent
              name="LuSettings2"
              size="18px"
              color="#121212"
              className=""
            />
          </button>
          {/* <div className={stylesProduct['product-grid']}> */}
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

export default Page;
