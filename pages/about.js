import Link from "next/link";
import Nav from "../pages/index/nav";
import Head from "next/head";
import styles from "../styles/about/about.module.css";
import Image from "next/image";
import Foot from "/pages/index/foot";
import Experience from "/JSON/about/experience.json";
import ContactMain from "/JSON/navHead.json";
import Skills from "/JSON/about/skills.json";

export default function About() {
    const data = Experience;
    return (
        <>
            <Nav />
            <Head></Head>

            <div className={styles.container} style={{ height: "1500px" }}>
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
                                width: "960px",
                                height: "400px",
                                paddingTop: "3rem",
                            }}
                        >
                            {/* 改寬度 */}
                            <div
                                style={{
                                    width: "960px",
                                    height: "400px",
                                }}
                            >
                                <div className={styles.boxbackground}>
                                    <h2
                                        style={{
                                            width: "300px",
                                            height: "100px",
                                            paddingLeft: "2rem",
                                        }}
                                    >
                                        Skills — できること —
                                    </h2>
                                </div>
                                {Skills.map(({ skills, main }, i) => (
                                    <div
                                        className={styles.Home_card___LpL1}
                                        key={i}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <Image
                                                className={
                                                    styles.Home_card___LpL1Image
                                                }
                                                src="/images/DSC_3087.jpg"
                                                alt=""
                                                width={200}
                                                height={200}
                                                objectFit="cover"
                                            />
                                            <h4
                                                style={{
                                                    textAlign: "center",
                                                }}
                                            >
                                                {skills}
                                            </h4>
                                            <p style={{ margin: "0" }}>
                                                {main}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* 經歷 */}
                            <div>
                                <div className={styles.boxbackground}>
                                    <h2
                                        style={{
                                            width: "400px",
                                            paddingLeft: "2rem",
                                            paddingBottom: "2rem",
                                        }}
                                    >
                                        Career — 経歴 —
                                    </h2>

                                    <div>
                                        {data.map(({ year, main }, i) => (
                                            <div
                                                style={{ display: "flex" }}
                                                key={i}
                                            >
                                                <div
                                                    style={{
                                                        width: "120px",
                                                        paddingRight: "50px",
                                                    }}
                                                >
                                                    {year}
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
                                                        paddingLeft: "60px",
                                                    }}
                                                >
                                                    {main}
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
                    <h1>{ContactMain[2].name}</h1>
                    <p>{ContactMain[2].suntitle}</p>
                    <br />
                    <p>{ContactMain[2].text}</p>

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
                            <a>{ContactMain[2].button}</a>
                        </div>
                    </Link>
                </div>
            </section>

            <Foot />
        </>
    );
}
