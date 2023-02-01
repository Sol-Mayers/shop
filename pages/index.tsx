import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import cn from "classnames";
import React from "react";
import Slider from "../components/Slider/Slider";

export default function Home({ clothes }) {
    return (
        <>
            <Head>
                <title>Магазин одежды inStyle | Главная</title>
                <meta name="title" content="Магазин одежды inStyle" />
            </Head>
            <div className={styles.containerMain}>
                <div className={styles.mainTextWrap}>
                    <h1 className={styles.title}>О бренде</h1>
                    <p className={cn(styles.text, styles.padText)}>
                        inStyle – бренд дизайнерской одежды и аксессуаров.
                        Собственные производственные площадки компании
                        расположены в России. Мы используем высококачественные
                        материалы только от лучших производителей рынка. inStyle
                        – это качественная одежда для всех. Это стильные вещи
                        трендовых фасонов.
                    </p>
                    <Link className={styles.btn} href="/clothes">
                        Перейти в каталог
                    </Link>
                </div>
                <Slider clothes={clothes} />
            </div>
        </>
    );
}

export async function getStaticProps(context) {
    const res = await fetch("https://fakestoreapi.com/products?limit=3");
    const clothes = await res.json();

    return {
        props: { clothes },
    };
}
