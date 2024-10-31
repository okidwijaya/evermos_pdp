import React from 'react'
import styles from '@/styles/banner/CollectionBanner.module.scss'
// import imagePlaceholder from '@/pictures/images/default-placeholder.png'
import imageBanner from '@/pictures/images/herobanner.jpg';
import Image from 'next/image'

function CollectionBanner() {
  return (
    <div className={styles['collection-banner_wrapper']}>
        <div className={styles['collection-banner_content']}>
            <h2>New Arrivals</h2>
            <p>Performance snow brand created to inspire riders to forge their unique path, transcend boundaries, and write their own story.</p>
        </div>
        <div className={styles['image-container']}>
          <Image
              src={imageBanner}
              priority={false}
              layout="fill"
              objectFit="cover"
              alt="placeholder image"
          />
      </div>
    </div>
  )
}

export default CollectionBanner