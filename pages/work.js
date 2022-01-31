import Link from "next/link";
import Nav from "../pages/index/nav";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Foot from "../pages/index/foot";
import Image from "next/image";

export default function About() {
    const main = [
        { title: "保養 — メンテナンス —", text: "保養" },
        { title: "凝膠 — メンテナンス —", text: "凝膠" },
        { title: "卸甲 — メンテナンス —", text: "卸甲" },
        { title: "客製化 — メンテナンス —", text: "客製化" },
        { title: "教學 — メンテナンス —", text: "教學" },
    ];
    return (
        <>
            <Nav />
            <Head></Head>

            {/* className={styles.container} */}
            <div style={{ textAlign: "center", margin: "0 auto" }}>
                <h1>Work</h1>
                <p>制作したもの</p>
            </div>

            <div className={styles.wrapper}>
                <section className={styles.flex}>
                    <aside>
                        <li className={styles.workli}>
                            <ul>全部</ul>
                            <ul>保養</ul>
                            <ul>凝膠</ul>
                            <ul>卸甲</ul>
                            <ul>客製化</ul>
                            <ul>教學</ul>
                        </li>
                    </aside>

                    <main>
                        <div
                            className={styles.Skillsbox}
                            style={{ textAlign: "left", display: "flex",flexDirection:'column' }}
                        >
                            {main.map(({title,text},i) => (
                                <div style={{ flexDirection: "column" }} key={i}>
                                    <div className={styles.worktitlecenter}>
                                        <p className={styles.boxbackground}></p>
                                        <h2 style={{ marginLeft: "1rem" }}>
                                            {title}
                                        </h2>
                                    </div>
                                    {/* 內容 */}
                                    <div className={styles.Work_card___LpL1}>
                                        <Image
                                            className={
                                                styles.Work_card___LpL1Image
                                            }
                                            src="/images/DSC_9610.jpg"
                                            alt=""
                                            width={600}
                                            height={400}
                                        />
                                        <div className={styles.workinfo}>
                                            <div style={{ marginTop: "60px" }}>
                                                <p>Nails{text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </section>
            </div>
            <Foot />
        </>
    );
}
