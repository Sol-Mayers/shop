import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "./Catalog.module.scss";
import cn from "classnames";

const Clothes = ({ clotheItem }) => {
    return (
        <>
            <Head>
                <title>Магазин одежды inStyle | Наша продукция</title>
                <meta name="title" content="Магазин одежды inStyle" />
            </Head>
            <div className={styles.container}>
                <div className={cn(styles.mainTextWrap, styles.whiteBack)}>
                    <div className={styles.productItemWrapper}>
                        <h2 className={styles.titleProduct}>
                            {clotheItem.title}
                        </h2>
                        <Image
                            src={clotheItem.image}
                            alt="clothes"
                            width="200"
                            height="200"
                            className={styles.innerImageItem}
                        />
                        <p className={styles.productItemDesc}>
                            {clotheItem.description}
                        </p>
                        <p>
                            <b>{`${clotheItem.price} ${"руб."}`}</b>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const clotheItem = await res.json();

    return {
        props: { clotheItem },
    };
}

export default Clothes;
