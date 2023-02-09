import React, { useState, FC, useEffect } from "react";
import GetProduct from "../GetProduct/GetProduct";
import { CartProps } from "../../types";
import styles from "./Cart.module.scss";
import cn from "classnames";
import Image from "next/image";
import ClearCart from "../ClearCart/ClearCart";

const Cart: FC<CartProps> = ({ clicked, state }) => {
    const [items, setItems] = useState([]);
    const [clearPopup, setClearPopup] = useState(false);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart"));
        if (items) {
            setItems(items);
        }
        window.addEventListener("storage", () => {
            const items = JSON.parse(localStorage.getItem("cart"));
            if (items) {
                setItems(items);
            }
        });
        window.addEventListener("storage-clear", () => {
            const items = JSON.parse(localStorage.getItem("cart"));
            if (!items) {
                setItems([]);
            }
        });
    }, []);

    const cartSum = items.reduce(
        (acc, n) => Number(Math.floor((acc + n.amount * n.price) * 100) / 100),
        0
    );

    const clearAndHide = () => {
        ClearCart();
        setClearPopup(false);
    };

    return (
        <div className={clicked ? styles.clearWrapper : styles.hide}>
            <div className={styles.cartBlock}>
                <div className={styles.upperWrapper}>
                    <h2 className={styles.cartNameCart}>Корзина</h2>
                    <button
                        onClick={() => state()}
                        className={styles.closeButton}
                    />
                </div>
                <button
                    onClick={() => setClearPopup(true)}
                    className={
                        items.length === 0
                            ? cn(styles.clearButton, styles.unTouch)
                            : styles.clearButton
                    }
                >
                    Очистить корзину
                </button>
                <div className={styles.cartInnerBlock}>
                    {items.length === 0 && (
                        <p className={styles.cartTitle}>Корзина пуста...</p>
                    )}
                    {items.map((product) => {
                        return (
                            <div key={product.id} className={styles.cartInner}>
                                <div className={styles.cartInnerImageWrapper}>
                                    <Image
                                        src={product.image}
                                        alt="product-image"
                                        className={styles.cartInnerImage}
                                        width="100"
                                        height="100"
                                    />
                                </div>
                                <div className={styles.descWrapper}>
                                    <h3 className={styles.cartInnerTitle}>
                                        {product.title}
                                    </h3>
                                    <p className={styles.cartInnerDesc}>
                                        {product.description}
                                    </p>
                                    <p className={styles.cartInnerPrice}>
                                        {`${product.price}${" руб."}`}
                                    </p>
                                    <p className={styles.cartInnerDesc}>
                                        {`${"Количество: "}${product.amount}`}
                                    </p>
                                    <p
                                        className={cn(
                                            styles.cartInnerPrice,
                                            styles.mainSum
                                        )}
                                    >
                                        {`${"Общая сумма: "}${
                                            product.price * product.amount
                                        }${" руб."}`}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                    {items.length !== 0 && (
                        <div>
                            Полная сумма к оплате: <b>{cartSum} руб.</b>
                        </div>
                    )}
                </div>

                <div
                    className={clearPopup ? styles.showClearPopup : styles.hide}
                >
                    <p className={styles.clearTitle}>
                        Вы действительно хотите очистить корзину?
                    </p>
                    <div className={styles.clearButtonWrap}>
                        <button
                            onClick={() => clearAndHide()}
                            className={styles.clearButtonInner}
                        >
                            Да
                        </button>
                        <button
                            onClick={() => setClearPopup(false)}
                            className={styles.clearButtonInner}
                        >
                            Нет
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
