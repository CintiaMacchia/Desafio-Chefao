import React from 'react';
import styles from './ProductDetails.module.css';

interface ProductDetailsProps {
    id: string;
    title: string;
    price: number;
    description: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
    id,
    title,
    price,
    description
}) => {
    return (
        <div className={styles['product-details']}>
            <span className={styles['title']}>{title}</span>
            <span className={styles['price']}>${price.toFixed(2)}</span>
            <p>{description}</p>
            <div className={styles['btn-wrapper']}>
                <button className={`${styles['btn']} ${styles['outline']}`}>
                    Add to cart
                </button>
                <button className={styles['btn']}>
                    Buy now
                </button>
            </div>
        </div>
    )
}

export default ProductDetails;