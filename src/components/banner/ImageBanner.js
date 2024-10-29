import React from 'react'
import styles from '@/styles/banner/CollectionBanner.module.scss'
import stylesBanner from '@/styles/banner/ImageBanner.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function ImageBanner(props) {
  return (
    <div className={stylesBanner['image-banner_wrapper']}>
        <div className={stylesBanner['image-banner_content']}>
            <h2>ON MOUNTAIN INNOVATION</h2>
            <p>Performance snow brand created to inspire riders to forge their unique path, transcend boundaries, and write their own story.</p>
            <div className={stylesBanner["image-banner_cta_button"]}>
                <Link href='pages/collection' className={`${styles.btn} ${stylesBanner.btn_viewall}`}>See All</Link>
                <Link href='pages/collection' className={`${styles.btn} ${stylesBanner.btn_shopnow}`}>Shop Now</Link>
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