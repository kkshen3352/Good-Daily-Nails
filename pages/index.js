import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Nav from "../pages/index/nav";
import Main from "../pages/index/main";
import Aection from "../pages/index/aection";
import Foot from "../pages/index/foot"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Good Daily Nails</title>
                <meta
                    name="description"
                    content="Generated by Good Daily Nails"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* index */}
            <Nav />
            <Main />
            <Aection />

            <Foot />
        </div>
    );
}
