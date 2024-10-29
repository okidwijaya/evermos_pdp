"use client";
import { useEffect, useState } from "react";
import MenuDrawer from "@/components/navigation/DrawerMenu";
import IconComponent from "@/components/icon/IconComponents";
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
// import styles from "./page.module.css";

export default function Home() {
  const [drawerState, setDrawerState] = useState(false);
  const [isLogin, isLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const drawerToggle = () => {
    setDrawerState(!drawerState);
  };

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
      <nav className="grid grid_cols-3 w-full">
        <div onClick={drawerToggle} className="drawer-menu_toggle">
          <IconComponent
            name="GiHamburgerMenu"
            size="20px"
            color="#121212"
            className=""
          />
        </div>
        <div className="text-align-center w-full">
          <Link href="/">
            <h2>Holla!</h2>
          </Link>
        </div>
        <div className="top-navigation_right-menu">
          <ul className="top-navigation_right-menu--list">
            <li className="text-light">Search</li>
            <li className="text-light">
              {isLogin ? (
                <a href="/pages">Account</a>
              ) : (
                <a href="/pages">Login</a>
              )}
            </li>
            {isLogin ? (
              <li className="w-max">
                <button className="mx-auto" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="" style={{ display: "none" }}></li>
            )}
            <li
              className="text-light"
              style={{ visibility: "hidden", height: "0", width: "0" }}
            >
              Cart
            </li>
          </ul>
        </div>
      </nav>
      {drawerState ? (
        <div
          style={{
            backgroundColor: "#181818b3",
            display: drawerState ? "block" : "none",
          }}
          className="drawer-wrapper"
        >
          <div
            className="w-full text-align-right"
            style={{ padding: "8px 16px" }}
          >
            <button onClick={drawerToggle} className="text-light">
              [close]
            </button>
          </div>
          <MenuDrawer />
        </div>
      ) : null}
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
