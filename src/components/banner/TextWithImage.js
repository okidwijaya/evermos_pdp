import React from 'react'
import styles from '@/styles/banner/CollectionBanner.module.scss'
import stylesBanner from '@/styles/banner/ImageWithText.module.scss'
import Image from 'next/image'

function TextWithImage(props) {
  return (
    <div className={stylesBanner['image-with-text_wrapper']}>
    <div className={`${stylesBanner.imageBanner_wrapper} ${stylesBanner.imageWithText_left}`}>
        <div className={styles['image-container']}>
          <Image
              src={props.imageFirst}
              priority={false}
              layout="fill"
              objectFit="cover"
              alt="placeholder image"
          />
      </div>
      <div className={stylesBanner['image-banner_content']}>
            <h2>All Mountain Directional Shape</h2>
            <p>Directional Shape is designed to be ridden with a slightly longer nose than tail to concentrate pop in the tail while providing plenty of float, flow, and control to rip any terrain or condition</p>
        </div>
    </div>

    <div className={`${stylesBanner.imageBanner_wrapper} ${stylesBanner.imageWithText_right}`}>
        <div className={styles['image-container']}>
          <Image
              src={props.imageSecond}
              priority={false}
              layout="fill"
              objectFit="cover"
              alt="placeholder image"
          />
      </div>
      <div className={stylesBanner['image-banner_content']}>
            <h2>Twin Flex</h2>
            <p>Twin Flex is perfectly symmetrical from tip to tail for a balanced ride thats equally versatile regular or switch</p>
        </div>
    </div>
    </div>
  )
}

export default TextWithImage