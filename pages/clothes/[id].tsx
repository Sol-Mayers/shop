import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "./Catalog.module.scss";
import cn from "classnames";

export async function getStaticPaths() {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();

    const paths = data.map((clotheItem) => {
        return {
            params: { id: clotheItem.id.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();

    return {
        props: { clotheItem: data },
    };
}

const Clothes = ({ clotheItem }) => {
    // const addProduct = (product: any) => {
    //     localStorage.setItem(
    //         `${"inStyle_product__"}${clotheItem.id}`,
    //         JSON.stringify(product)
    //     );
    //     console.log(localStorage);
    // };
    // const clearCart = () => {
    //     localStorage.clear();
    //     console.log(localStorage);
    // };

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
                        {/* <button onClick={() => addProduct(clotheItem)}>
                            В корзину
                        </button>
                        <button onClick={() => clearCart()}>
                            очистить корзину
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Clothes;
