import React from "react";
import Head from "next/head";
import styles from "./About.module.scss";

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>Магазин одежды inStyle | О нас</title>
                <meta name="title" content="Магазин одежды inStyle" />
            </Head>
            <div className={styles.container}>
                <div className={styles.mainTextWrap}>
                    <h1 className={styles.title}>О нас</h1>
                    <p className={styles.aboutText}>
                        В inStyle можно найти классические модели кроссовок, кед
                        и ботинок, редкие культовые релизы, а также
                        технологичные баскетбольные новинки. Регулярно коллекция
                        в магазинах пополняется эксклюзивными для России
                        моделями. В ассортименте inStyle всегда можно найти
                        одежду, в том числе верхнюю, разнообразные аксессуары, а
                        также средства для чистки и защиты обуви.
                    </p>
                    <p className={styles.aboutText}>
                        Магазины inStyle созданы для людей, которые живут в
                        ритме своего города, следят за последними мировыми
                        трендами, всегда находят для себя занятие по душе и не
                        представляют жизни без удобной обуви и одежды.
                    </p>
                    <p className={styles.aboutText}>
                        При желании покупатели могут оформить карту постоянного
                        клиента, чтобы пользоваться бонусами, скидками и другими
                        привилегиями, в частности в числе первых получать
                        информацию о новинках, распродажах и специальных
                        предложениях.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
