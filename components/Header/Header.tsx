import React from "react";
import styles from "../../styles/Home.module.scss";
import { SiStylelint } from "react-icons/si";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <header className={styles.headerStyle}>
            <div>
                <SiStylelint />
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
