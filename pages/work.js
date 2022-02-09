import Link from "next/link";
import Nav from "../pages/index/nav";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Foot from "../pages/index/foot";
import Image from "next/image";
import Menu from "/JSON/work/menu.json";
import ImageMain from "/JSON/index/imageWork.json";
import Title from "/JSON/navHead.json"

export default function About() {
    return (
        <>
            <Nav />
            <Head></Head>
            {/* className={styles.container} */}
            <div style={{ textAlign: "center", margin: "0 auto" }}>
                <h1>{Title[1].name}</h1>
                <p>{Title[1].subtitle}</p>
            </div>

            <div className={styles.wrapper}>
                <section className={styles.flex}>
                    <aside className={styles.workmeun}>
                        <li>
                            {Menu.map(({ text, more }, i) => (
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
                            {ImageMain.map(
                                ({ more, text, text1 }, i) => (
                                    <div
                                        style={{ flexDirection: "column" }}
                                        key={i}
                                    >
                                        <div className={styles.worktitlecenter}>
                                            <p
                                                className={styles.boxbackground}
                                            ></p>
                                            <h2
                                                style={{ marginLeft: "1rem" }}
                                                id={more}
                                            >
                                                {text} — {text1}
                                            </h2>
                                        </div>
                                        {/* 內容 */}
                                        <div
                                            className={styles.Work_card___LpL1}
                                        >
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
                                                    <p
                                                        style={{
                                                            marginTop: "40px",
                                                        }}
                                                    >
                                                        {text}
                                                        <br />
                                                        {text1}
                                                    </p>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </main>
                </section>
            </div>
            <Foot />
        </>
    );
}
