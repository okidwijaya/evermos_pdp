import React from 'react'
import styles from '@/styles/banner/CollectionBanner.module.scss'
import imagePlaceholder from '@/pictures/images/default-placeholder.png'
import Image from 'next/image'

function CollectionBanner() {
  return (
    <div className={styles['collection-banner_wrapper']}>
        <div>
            <h2>Collection Title</h2>
            <p>Collection Description</p>
        </div>
        <div className={styles['image-container']}>
          <Image
              src={imagePlaceholder}
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