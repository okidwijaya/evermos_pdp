"use client";
import React, { useState, useEffect } from "react";
import imagePlaceholder from "@/pictures/images/default-placeholder.png";
import bannerdetail1 from "@/pictures/images/pdp_detail1.svg";
import bannerdetail2 from "@/pictures/images/pdp_detail2.svg";
import sizechart from "@/pictures/images/sizechart.png";
import Image from "next/image";
import styles from "@/styles/product/ProductDetail.module.scss";
import IconComponent from "@/components/icon/IconComponents";
import { getProductDetail } from "@/utils/productDetail";
import NavBar from "@/components/navigation/NavBar";
import ProductCard from "@/components/card/ProductCard";
import { getAllProduct } from "@/utils/product";
import stylesProduct from "@/styles/global.module.scss";
import Link from "next/link";
import TextWithImage from "@/components/banner/TextWithImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import loadingsvg from "@/pictures/svg/tube-spinner.svg";

function Page({ params }) {
  const { productId } = params;
  const [customSettings, setCustomSettings] = useState({});
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [collapsibleDescription, setCollapsibleDescription] = useState(true);
  const [collapsibleSize, setCollapsibleSize] = useState(false);
  console.log(productId);

  useEffect(() => {
    getProductDetail(productId)
      .then((response) => {
        console.log(response);
        setProduct(response.data);
        setIsLoading(false);
        setCustomSettings(settings);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [productId]);

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      // console.log(dots)
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "4px",
          padding: "4px",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
        }}
      >
        {product && product.images && product.images[i] ? (
          <Image
            src={product.images[i]}
            key={i}
            priority={false}
            width={24}
            height={24}
            alt="product image"
          />
        ) : (
          i + 1
        )}
      </div>
    ),
  };

  const showDescription = () => {
    if (!collapsibleDescription) {
      setCollapsibleDescription(true);
    } else {
      setCollapsibleDescription(false);
    }
  };

  const showSize = () => {
    if (!collapsibleSize) {
      setCollapsibleSize(true);
    } else {
      setCollapsibleSize(false);
    }
  };

  const minQty = () => {
    if (qty !== 0) {
      setQty(qty - 1);
    }
  };

  const plusQty = () => {
    setQty(qty + 1);
  };

  return (
    <>
      <NavBar />
      <div className={styles["product-detail"]}>
        {isLoading ? (
          <div className='' style={{height: '100%', margin: 'auto',color:"#121212", width: '100%', display: 'flex', maxWidth: '75px'}}>
          <Image
                src={loadingsvg}
                priority={false}
                width={75}
                height={75}
                alt="placeholder image"
            />
        </div>
        ) : // products.map((product, index) => (
        product ? (
          <div className={styles["pdp-content-container"]}>
            <div className={styles["pdp_left-content"]}>
                <div className="slider-container">
                {product.images.length > 1 ?
                  (<Slider className={styles["image-container"]} {...settings}>
                    {product.images.length > 0 ? (
                      product.images.map((image, index) => (
                        <div key={index} className={styles["pdp_imgDetail"]}> 
                          <Image
                            src={image}
                            priority={false}
                            alt="placeholder image"
                          />
                        </div>
                      ))
                    ) : (
                      <div className={styles["pdp_imgDetail"]}> 
                        <Image
                          src={imagePlaceholder}
                          priority={false}
                          alt="placeholder image"
                        />
                      </div>
                    )
                    }
                    </Slider>
                    )
                    : (
                      <div className={styles["pdp_imgDetail"]}> 
                      <Image
                        src={product.images[0].src}
                        priority={false}
                        layout="fill"
                        objectFit="cover"
                        alt="placeholder image"
                      />
                      </div>
                    )
                  }
                </div>
            </div>

            <div className={styles["pdp_right-content"]}>
              <div className={styles["pdp_right-content_head"]}>
                <h2 className={styles["pdp_title"]}>{product.title}</h2>
                <p className={styles["pdp_price"]}>
                  {product.variants.length > 0 &&
                  product.variants[0].compare_at_price != null &&
                  product.variants[0].compare_at_price != "" &&
                  product.variants[0].compare_at_price != undefined ? (
                    <s>${product.variants[0].price}</s>
                  ) : (
                    <>${product.variants[0].price}</>
                  )}
                  {product.variants.length > 0 &&
                  product.variants[0].compare_at_price != null &&
                  product.variants[0].compare_at_price != "" &&
                  product.variants[0].compare_at_price != undefined ? (
                    <span className={styles["compare-at-price"]}>
                      {" "}
                      ${product.variants[0].compare_at_price}
                    </span>
                  ) : (
                    <></>
                  )}
                </p>
              </div>
              <div className={styles["pdp_variant-container"]}>
                <p className={styles["pdp_variant-header"]}>Variant</p>
                <div
                  style={{
                    gridTemplateColumns: `repeat(${product.variants.length}, 35px)`,
                  }}
                  className={styles["pdp_variant-content"]}
                >
                  {product.variants.length > 0 ? (
                    product.variants.map((item, index) => (
                      <button
                        type="button"
                        style={{ backgroundColor: `${item.option1}` }}
                        className={styles["btn"]}
                        key={index}
                      ></button>
                    ))
                  ) : (
                    <></>
                  )}
                  {/* <button className={styles["btn"]}>Blue</button> */}
                  {/* <button className={styles["btn"]}>White</button>
                <button className={styles["btn"]}>Green</button>
                <button className={styles["btn"]}>Grey</button> */}
                </div>
              </div>
              <div
                style={{ display: "none" }}
                className={styles["pdp_variant-container"]}
              >
                <p className={styles["pdp_variant-header"]}>Size</p>
                <div className={styles["pdp_variant-content"]}>
                  <button className={styles["btn"]}>S</button>
                  <button className={styles["btn"]}>M</button>
                  <button className={styles["btn"]}>L</button>
                  <button className={styles["btn"]}>XL</button>
                </div>
              </div>
              <div className={styles["pdp_qty-wrapper"]}>
                <p className={styles["pdp_qty-heading"]}>Quantity</p>
                <div className={styles["pdp_qty-container"]}>
                  <button onClick={() => minQty()} className={styles["btn"]}>
                    -
                  </button>
                  <input
                    className={styles["pdp_qty-input-field"]}
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    name="qty"
                    type="number"
                  />
                  <button onClick={() => plusQty()} className={styles["btn"]}>
                    +
                  </button>
                </div>
              </div>
              <div className={styles["pdp_cta-container"]}>
                <button className={`${styles.btn} ${styles.add_to_wishlist}`}>
                  <IconComponent
                    name="CiHeart"
                    size="28px"
                    color="#121212"
                    className=""
                  />
                </button>
                <button className={`${styles.btn} ${styles.add_to_cart}`}>
                  Add to Cart
                </button>
              </div>

              <button className={`${styles.btn} ${styles.buy_now}`}>
                Buy Now
              </button>

              <div className={styles["pdp_bottom-content"]}>
                <div className={styles["pdp_collapsible"]}>
                  <div
                    onClick={() => showDescription()}
                    className={styles["pdp_collapsible-head"]}
                  >
                    <p>Description</p>
                    {collapsibleDescription ? (
                      <IconComponent
                        name="IoIosArrowUp"
                        size="16px"
                        color="#121212"
                        className=""
                      />
                    ) : (
                      <IconComponent
                        name="IoIosArrowDown"
                        size="16px"
                        color="#121212"
                        className=""
                      />
                    )}
                  </div>
                  <div
                    style={{
                      display: collapsibleDescription ? "block" : "none",
                    }}
                    className={styles["pdp_collapsible-content"]}
                  >
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using Content here, content here, making it
                      look like readable English.
                    </p>
                  </div>
                </div>

                <div className={styles["pdp_collapsible"]}>
                  <div
                    onClick={() => showSize()}
                    className={styles["pdp_collapsible-head"]}
                  >
                    <p>Size Chart</p>
                    {collapsibleSize ? (
                      <IconComponent
                        name="IoIosArrowUp"
                        size="16px"
                        color="#121212"
                        className=""
                      />
                    ) : (
                      <IconComponent
                        name="IoIosArrowDown"
                        size="16px"
                        color="#121212"
                        className=""
                      />
                    )}
                  </div>
                  <div
                    style={{ display: collapsibleSize ? "block" : "none" }}
                    className={`${styles.pdp_collapsibleContent} ${styles.sizechart}`}
                  >
                    <Image
                      src={sizechart}
                      priority={false}
                      layout="fill"
                      objectFit="cover"
                      alt="placeholder image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {isLoading ? 
        null: (
        <>
          {/* <ImageBanner image={bannerdetail3} /> */}
          <TextWithImage
            imageFirst={bannerdetail1}
            imageSecond={bannerdetail2}
          />

          <div className={styles["pdp_product-recommendation"]}>
            <h3>RECOMMENDATIONS</h3>
            <Link href="/pages/collection">View All</Link>
          </div>
          <div className={stylesProduct["product-grid"]}>
            {products.length > 0 ? (
              products.map((product, index) => (
                <ProductCard
                  variant={product.variants}
                  productId={product.id}
                  picture={product.images[0].src}
                  title={product.title}
                  key={index}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Page;
