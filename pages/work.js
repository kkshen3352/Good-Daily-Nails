import Link from "next/link";
import Nav from "../pages/index/nav";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Foot from "../pages/index/foot";
import Image from "next/image";

export default function About() {
    const menu = [
        { text: "全部", href: "/work" },
        { text: "保養", href: "#1" },
        { text: "凝膠", href: "#2" },
        { text: "卸甲", href: "#3" },
        { text: "客製化", href: "#4" },
        { text: "教學", href: "#5" },
    ];
    const main = [
        { more:'1',title: "保養 — メンテナンス —", text: "保養" },
        { more:'2',title: "凝膠 — メンテナンス —", text: "凝膠" },
        { more:'3',title: "卸甲 — メンテナンス —", text: "卸甲" },
        { more:'4',title: "客製化 — メンテナンス —", text: "客製化" },
        { more:'5',title: "教學 — メンテナンス —", text: "教學" },
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
                        <li >
                            {menu.map(({ text,href }, i) => (
                                <ul key={i}>
                                    <Link href={href} replace>
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
                            {main.map(({ more,title, text }, i) => (
                                <div
                                    style={{ flexDirection: "column" }}
                                    key={i}
                                >
                                    <div className={styles.worktitlecenter}>
                                        <p className={styles.boxbackground}></p>
                                        <h2 style={{ marginLeft: "1rem" }} id={more}>
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
