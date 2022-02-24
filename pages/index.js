import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Nav from "../pages/index/nav";
import Main from "../pages/index/main";
import Aection from "../pages/index/aection";
import Foot from "../pages/index/foot";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>女子の日常</title>
                <meta
                    name="description"
                    content="女子の日常"
                />
                <link rel="icon" href="/images/LOGO.jpg" />
            </Head>
            <Nav />
            <Main />
            <Aection />
            <Foot />
        </div>
    );
}
