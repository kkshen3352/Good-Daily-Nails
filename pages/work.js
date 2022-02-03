import Link from "next/link";
import Nav from "../pages/index/nav";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Foot from "../pages/index/foot";
import Image from "next/image";

export default function About() {
    const menu = [
        { text: "全部", more: "/work" },
        { text: "保養", more: "#maintainance" },
        { text: "凝膠", more: "#gel" },
        { text: "卸甲", more: "#disarm" },
        { text: "造型", more: "#modeling" },
        { text: "教學", more: "#teaching" },
        { text: "睫毛", more: "#eyelash" },
    ];
    const main = [
        { more: "maintainance", title: "保養 — メンテナンス —", text: "保養" },
        { more: "gel", title: "凝膠 — メンテナンス —", text: "凝膠" },
        { more: "disarm", title: "卸甲 — メンテナンス —", text: "卸甲" },
        {
            more: "modeling",
            title: "造型 — メンテナンス —",
            text: "造型",
        },
        { more: "teaching", title: "教學 — メンテナンス —", text: "教學" },
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
                    <aside className={styles.workmeun}>
                        <li>
                            {menu.map(({ text, more }, i) => (
                                <ul key={i}>
                                    <Link href={more} replace>
                                        <a>{text}</a>
                                    </Link>
                                </ul>
                            ))}
                        </li>
                    </aside>

                    <main>
                        <div
                            className={styles.Skillsbox}
                            style={{
                                textAlign: "left",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {main.map(({ more, title, text }, i) => (
                                <div
                                    style={{ flexDirection: "column" }}
                                    key={i}
                                >
                                    <div className={styles.worktitlecenter}>
                                        <p className={styles.boxbackground}></p>
                                        <h2
                                            style={{ marginLeft: "1rem" }}
                                            id={more}
                                        >
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

                                        <Link href={`/work/${more}`}>
                                            <a className={styles.workinfo}>
                                                <p style={{marginTop:'50px'}}>Nails{text}</p>
                                            </a>
                                        </Link>
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
