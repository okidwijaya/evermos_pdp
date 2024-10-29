import React, {useState} from 'react'
import styles from '@/styles/card/PorductCard.module.scss'
import Image from 'next/image'
import imagePlaceholder from '@/pictures/images/default-placeholder.png'
import IconComponent from '../icon/IconComponents'
import Link from 'next/link'

function ProductCard(props) {
    const[productVariantArray, setProductVariantArray] = useState();

    const variantColor = [];
    const productVariants = (itemVariant) => {
        console.log(itemVariant) 
        if(itemVariant.length > 0){
            for(let i = 0; i < itemVariant.length; i++){
                console.log(itemVariant[i]);
                variantColor.push(<button type='button' style={{backgroundColor: `${itemVariant[i].option1}`}} className={styles['variantDot']} key={itemVariant[i].option1}></button>)
            }
        }     
    }
  return (
    <div className={styles['product-card_wrapper']}>
        <div className={styles['product-card_top-section']}>
            <div className={styles['product-label']}>
                <p className={`${styles.label} ${styles.label_new}'`}>New</p>
                <p className={`${styles.label} ${styles.label_preOrder}']`}>Pre-Order</p>
            </div>
            <button className={styles['wishlist_btn']}>
                <IconComponent
                name="CiHeart"
                size="24px"
                color="#121212"
                className=""
                />
            </button>
        </div>
        <Image
            src={props.picture}
            width={500}
            height={500}
            alt="placeholder image"
            priority={false}
            />
        <div className={styles['product_variant']}>
            {props.variant.length > 0 ? 
                props.variant.map((item, index) => (
                    <button type='button' style={{backgroundColor: `${item.option1}`}} className={styles['variantDot']} key={index}></button>
                ))
                : <></>
            }
        </div>
        <div className={styles['product_card_body']}>
            <Link href={`/pages/product/${props.productId}`}>
            <h2 className={styles['product_title']}>{props.title}</h2>
            </Link>
            <p className={styles['product-price']}>
                {props.variant.length > 0 && props.variant[0].compare_at_price !=  null && props.variant[0].compare_at_price !=  "" && props.variant[0].compare_at_price !=  undefined ? <s>${props.variant[0].price}</s> : <>${props.variant[0].price}</>} 
                {props.variant.length > 0 && props.variant[0].compare_at_price !=  null && props.variant[0].compare_at_price !=  "" && props.variant[0].compare_at_price !=  undefined ? <span className={styles['compare-at-price']}>${props.variant[0].compare_at_price}</span> : <></>} 
            </p>
            <div className={styles["product-card_cta_button"]}>
                <button className={styles["btn"]}>Buy Now</button>
                <button className={styles["btn"]}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard