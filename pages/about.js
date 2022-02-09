import Link from "next/link";
import Nav from "../pages/index/nav";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Foot from "/pages/index/foot";
import Experience from "/JSON/about/experience.json";

export default function About() {
    const data = Experience;
    return (
        <>
            <Nav />
            <Head></Head>

            <div className={styles.container}>
                <div style={{ textAlign: "center", margin: "0 auto" }}>
                    <h1>About</h1>
                    <p>私について</p>
                </div>

                <div className={styles.flex}>
                    <main style={{ padding: "1rem", margin: "1rem" }}>
                        <div className={styles.flex}>
                            <div className={styles.aboutmain}>
                                <p>
                                    .................................
                                    <br />
                                    .................................
                                    <br />
                                    .................................
                                    <br />
                                    .................................
                                    <br />
                                    .................................
                                    <br />
                                    .................................
                                    <br />
                                    .................................
                                    <br />
                                    .................................
                                    <br />
                                </p>
                            </div>
                            <div className={styles.aboutmaintitle}>
                                <Image
                                    src="/images/DSC_3087.jpg"
                                    alt="Girl"
                                    max-width={100}
                                    width={440}
                                    height={440}
                                    objectFit="cover"
                                />
                            </div>
                        </div>

                        {/* 技能 */}
                        <div
                            style={{
                                margin: "2rem",
                                padding: "2rem",
                                width: "960px",
                                height: "400px",
                            }}
                        >
                            {/* 改寬度 */}
                            <div className={styles.boxbackground}>
                                <h2
                                    style={{
                                        width: "400px",
                                        paddingLeft: "2rem",
                                    }}
                                >
                                    Skills — できること —
                                </h2>
                            </div>

                            {/* 經歷 */}
                            <div>
                                <div className={styles.boxbackground}>
                                    <h2
                                        style={{
                                            width: "400px",
                                            paddingLeft: "2rem",
                                        }}
                                    >
                                        Career — 経歴 —
                                    </h2>

                                    <div style={{ width: "960px" }}>
                                        {data.map((v, index) => (
                                            <div
                                                style={{ display: "flex" }}
                                                key={index}
                                            >
                                                <div style={{ width: "120px" }}>
                                                    {v.year}
                                                </div>
                                                <div
                                                    style={{
                                                        filter: "invert(98%) sepia(3%) saturate(5134%) hue-rotate(306deg) brightness(98%) contrast(84%)",
                                                    }}
                                                >
                                                    ●
                                                </div>
                                                <div
                                                    className={
                                                        styles.careerborder
                                                    }
                                                ></div>
                                                <div
                                                    style={{
                                                        width: "680px",
                                                        paddingLeft: "100px",
                                                    }}
                                                >
                                                    {v.main}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <section className={styles.back}>
                <div
                    style={{
                        textAlign: "center",
                        margin: "1rem auto",
                        padding: "2rem",
                    }}
                >
                    <h1>Contact</h1>
                    <p>お問い合わせ</p>
                    <br />
                    <p>お仕事のご相談やご依頼など、お気軽にご連絡ください！</p>

                    <Link href="/contact" replace>
                        <div
                            style={{
                                paddingTop: "10px",
                                margin: "0 auto",
                                width: "250px",
                                height: "50px ",
                                border: "1px solid black",
                                background: "#eee",
                            }}
                        >
                            <a>お問い合わせページへ</a>
                        </div>
                    </Link>
                </div>
            </section>

            <Foot />
        </>
    );
}
