import Link from "next/link";
import Nav from "../pages/index/nav";
import styles from "/styles/Home.module.css";
import Foot from "/pages/index/foot";

export default function About() {
    return (
        <>
            <Nav />
            <div className={styles.wrapper}
            style={{height:'75vh'}}
            >
                <h1 style={{ textAlign: "center" }}>Contact</h1>
                <p style={{ textAlign: "center" }}>コンタクト</p>
                <div className={styles.flex} style={{ margin: "0 auto" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910.0970821063188!2d120.65368382923006!3d24.158110222674686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d4320cf7487%3A0xc825a8ee14ce3694!2z5aWz5a2Q44Gu5pel5bi4!5e0!3m2!1szh-TW!2stw!4v1643718508428!5m2!1szh-TW!2stw"
                        width={600}
                        height={450}
                        style={{ border: "0" }}
                        allowFullScreen="none"
                        loading="lazy"
                    >
                        女子的日常地圖
                    </iframe>

                    <div className={styles.contacttable}>
                        <ul>
                            <li>
                                營業時間：
                                <br />
                                每週一至週五 13:00 ~ 20:00
                                <br />
                                每週六 12:00 ~ 18:00
                                <h4 style={{ marginTop: "0px", color: "red" }}>
                                    每週日 公休日
                                </h4>
                            </li>
                            <li>
                                地址：
                                <br />
                                407台中市西屯區大安西街43號
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Foot />
        </>
    );
}
