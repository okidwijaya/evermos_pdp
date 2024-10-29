import React from 'react'
import styles from '@/styles/banner/CollectionBanner.module.scss'
import stylesBanner from '@/styles/banner/ImageBanner.module.scss'
import Image from 'next/image'

function ImageBanner(props) {
  return (
    <div className={stylesBanner['image-banner_wrapper']}>
        <div className={stylesBanner['image-banner_content']}>
            <h2>Title</h2>
            <p>Description</p>
            <div className={stylesBanner["image-banner_cta_button"]}>
                <button className={styles["btn"]}>See All</button>
                <button className={styles["btn"]}>Shop Now</button>
            </div>
        </div>
        <div className={styles['image-container']}>
          <Image
              src={props.image}
              priority={false}
              alt="placeholder image"
          />
      </div>
    </div>
  )
}

export default ImageBanner