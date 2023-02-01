import React, { FC } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "./Catalog.module.scss";

const Catalog = ({ clothes }) => {
    return (
        <>
            <Head>
                <title>Магазин одежды inStyle | Наша продукция</title>
                <meta name="title" content="Магазин одежды inStyle" />
            </Head>
            <div className={styles.container}>
                <div className={styles.mainTextWrap}>
                    <h1>Наша одежда</h1>
                    <div className={styles.productWrap}>
                        {clothes.map((clothesItem) => {
                            return (
                                <Link
                                    href={`/clothes/${clothesItem.id}`}
                                    className={styles.product}
                                    key={clothesItem.id}
                                >
                                    <h2>{clothesItem.title}</h2>
                                    <div className={styles.productImage}>
                                        <Image
                                            src={clothesItem.image}
                                            alt="clothes"
                                            width="200"
                                            height="200"
                                            className={styles.innerImage}
                                        />
                                    </div>
                                    <p className={styles.productDesc}>
                                        {clothesItem.description}
                                    </p>
                                    <p>
                                        <b>{`${
                                            clothesItem.price
                                        } ${"руб."}`}</b>
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export async function getStaticProps() {
    const res = await fetch("https://fakestoreapi.com/products");
    const clothes = await res.json();

    return {
        props: { clothes },
    };
}

export default Catalog;
