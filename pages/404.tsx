import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.scss";

const NotFoundPage = () => {
    const [timer, setTimer] = useState(3);
    const router = useRouter();

    let time = function () {
        setTimer(timer - 1);
        if (timer <= 0) {
            clearInterval(counter);
            return;
        }
    };
    let counter = setInterval(time, 1000);

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.mainErrorWrap}>
                    <div className="not-found">
                        <h1>Ой...</h1>
                        <h2>Такой страницы здесь нет!</h2>

                        <p>
                            Перехожу на <Link href="/">главную</Link> страницу
                            через <span>{timer}</span> секунды
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
