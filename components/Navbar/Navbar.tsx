import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Cart from "../Cart/Cart";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import cn from "classnames";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [clicked, setClicked] = useState(false);

    const openCart = () => {
        setNav(false);
        setClicked(true);
    };

    return (
        <nav className={styles.box}>
            <ul className={nav ? cn(styles.menu, styles.active) : styles.menu}>
                <li className={styles.listItem}>
                    <Link
                        className={cn(styles.dropdownButton, styles.link)}
                        href="/"
                        onClick={() => setNav(false)}
                    >
                        Домой
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link
                        className={cn(styles.show, styles.link)}
                        href="/clothes"
                        onClick={() => setNav(false)}
                    >
                        Каталог
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link
                        className={cn(styles.dropdownButton, styles.link)}
                        href="/about"
                        onClick={() => setNav(false)}
                    >
                        О нас
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link
                        className={cn(styles.dropdownButton, styles.link)}
                        href="/reviews"
                        onClick={() => setNav(false)}
                    >
                        Отзывы
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <button
                        className={cn(styles.dropdownButton, styles.link)}
                        onClick={() => openCart()}
                    >
                        <Image
                            src="/images/cart.svg"
                            alt="cart"
                            width="30"
                            height="30"
                            className={styles.cart2}
                        />
                        <Image
                            src="/images/cart-black.svg"
                            alt="cart"
                            width="30"
                            height="30"
                            className={styles.cart}
                        />
                    </button>
                </li>
            </ul>
            <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
                {nav ? (
                    <AiOutlineClose
                        className={nav ? styles.link : styles.whiteLink}
                        size={25}
                    />
                ) : (
                    <AiOutlineMenu
                        className={nav ? styles.link : styles.whiteLink}
                        size={25}
                    />
                )}
            </div>
            <Cart clicked={clicked} state={() => setClicked(false)} />
        </nav>
    );
};

export default Navbar;
