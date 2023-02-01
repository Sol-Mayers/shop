import Head from "next/head";
import styles from "./Reviews.module.scss";
import React from "react";

const Reviews = ({ reviews }) => {
    return (
        <>
            <Head>
                <title>Магазин одежды inStyle | Отзывы</title>
                <meta name="title" content="Магазин одежды inStyle" />
            </Head>
            <div className={styles.container}>
                <div className={styles.mainFeedbacksWrap}>
                    <h1 className={styles.title}>Отзывы клиентов</h1>
                    <div className={styles.reviews}>
                        {reviews.length &&
                            reviews.slice(0, 20).map((res) => {
                                return (
                                    <div key={res.id} className={styles.review}>
                                        <p className={styles.reviewName}>
                                            {res.name}
                                        </p>
                                        <p
                                            className={styles.reviewText}
                                        >{`${res.body.slice(0, 200)}...`}</p>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export async function getStaticProps() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();

    return {
        props: {
            reviews: data.slice(0, 10),
        },
    };
}

export default Reviews;
