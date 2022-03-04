import Link from "next/link";
import Nav from "../pages/index/nav";
import Head from "next/head";
import styles from "../styles/resever/resever.module.css";
import Image from "next/image";
import Foot from "/pages/index/foot";
import resever from "/JSON/resever/resever.json";

export default function Reserve() {
    const titledata = resever[0].reseverhead;
    const maindata = resever[1].resevermain;

    return (
        <>
            <Head>
                <title>女子の日常-預約須知</title>
                <meta name="description" content="女子の日常-預約須知" />
                <link rel="icon" href="/images/LOGO.jpg" />
            </Head>
            <Nav />

            <div className={styles.wrapper}>
                <div className={styles.resevertitle}>
                    <div className={styles.flex}>
                        <h1>{titledata.head}</h1>
                        <h4 className={styles.flex}>
                            {titledata.title}
                            <p style={{color:"red"}}>{titledata.subtitle}</p>
                        </h4>
                    </div>
                </div>
                <div className={styles.reseverbox}>
                    {maindata.map(({ main }, i) => (
                        <ul key={i}>
                            <li className={styles.flex2}>
                                ※&ensp;<p>{main}</p>
                            </li>
                        </ul>
                    ))}
                    <div style={{ height: "35px" }}></div>
                </div>
            </div>
            <Foot />
        </>
    );
}
