import Prict from "/JSON/navHead.json";
import Nav from "/pages/index/nav";
import Foot from "/pages/index/foot";
import Head from "next/head";
import Image from "next/image";
import styles from "/styles/menu/menu.module.css";

export default function prict() {
    return (
        <>
            <Head>
                <title>女子の日常-價目表</title>
                <meta name="description" content="女子の日常-價目表" />
                <link rel="icon" href="/images/LOGO.jpg" />
            </Head>
            <Nav />
            <div className={styles.wrapper}>
                <div className={styles.flex}>
                <h1>{Prict[3].name}</h1>
                <p>{Prict[3].subtitle}</p>
                <Image
                    src="/images/prict.jpg"
                    alt=""
                    width={628}
                    height={888}
                />
                </div>
            </div>
            <Foot />
        </>
    );
}
