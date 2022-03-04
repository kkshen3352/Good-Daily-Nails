import Nav from "../pages/index/nav";
import styles from "/styles/contact/contact.module.css";
import Foot from "/pages/index/foot";
import Title from "/JSON/navHead.json";
import MapTable from "/JSON/contact/maptable.json";
import Head from "next/head";

export default function About() {
    return (
        <>
        <Head>
                <title>女子の日常-聯絡地址</title>
                <meta
                    name="description"
                    content="女子の日常-聯絡地址"
                />
                <link rel="icon" href="/images/LOGO.jpg" />
            </Head>
            <Nav />
            <div className={styles.wrapper}>
                <h1 style={{ textAlign: "center" }}>{Title[4].name}</h1>
                <p style={{ textAlign: "center" }}>{Title[4].subtitle}</p>
                <div className={styles.flex}>
                    <iframe
                        className={styles.contactiframe}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910.0970821063188!2d120.65368382923006!3d24.158110222674686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d4320cf7487%3A0xc825a8ee14ce3694!2z5aWz5a2Q44Gu5pel5bi4!5e0!3m2!1szh-TW!2stw!4v1643718508428!5m2!1szh-TW!2stw"
                        width={600}
                        height={450}
                        allowFullScreen="none"
                        loading="lazy"
                    >
                        女子的日常地圖
                    </iframe>

                    <div className={styles.contacttable}>
                        <ul>
                            <li>
                                {MapTable[0].text}
                                <br />
                                {MapTable[0].main}

                                <h4 style={{ marginTop: "0px", color: "red" }}>
                                    {MapTable[0].main1}
                                </h4>
                            </li>
                            <li>
                                {MapTable[1].text}
                                <br />
                                {MapTable[1].main}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Foot />
        </>
    );
}
