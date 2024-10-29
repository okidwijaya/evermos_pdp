'use client';
import ProductCard from '@/components/card/ProductCard'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/global.module.scss'
import stylesProduct from '@/styles/global.module.scss'
import NavBar from '@/components/navigation/NavBar';
import CollectionBanner from '@/components/card/CollectionBanner';
import { getAllProduct } from "@/utils/product";

function page() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllProduct()
    .then(response => {
      setProducts(response.data);
      setIsLoading(false);
    })
    .catch(err => {
        console.error(err);
      });
  },[]);
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <NavBar/>
      <div style={{marginBottom: '1rem'}}>
        <CollectionBanner />
      </div>
      <div className={stylesProduct['product-grid']}>
        {products.length > 0 ? products.map((product, index) => (
            <ProductCard variant={product.variants} productId={product.id} picture={product.images[0].src} title={product.title}  key={index} />
        ))
          :<></>
        }
      </div>
    </div>
  )
}

export default page