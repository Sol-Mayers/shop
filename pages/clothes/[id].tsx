import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "./Catalog.module.scss";
import AddProduct from "../../components/AddProduct/AddProduct";
import cn from "classnames";

export async function getStaticPaths() {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();

    const paths = data.map((clotheItem: { id: { toString: () => any } }) => {
        return {
            params: { id: clotheItem.id.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context: { params: { id: any } }) {
    const id = context.params.id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();

    return {
        props: { clotheItem: data },
    };
}

const Clothes = ({ clotheItem }) => {
    const [icon, setIcon] = useState(false);

    let fullyAdded = () => {
        AddProduct(clotheItem);
        setIcon(true);
        setTimeout(() => setIcon(false), 2000);
    };
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
                        <button
                            onClick={() => fullyAdded()}
                            className={styles.addButton}
                        >
                            <Image
                                src="/images/checked.svg"
                                width="25"
                                height="25"
                                alt="checked"
                                className={
                                    icon ? styles.checkedIcon : styles.hideIcon
                                }
                            />
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Clothes;
