import Link from "next/link";
import Nav from "../pages/index/nav";
import Head from "next/head";
import styles from "../styles/about/about.module.css";
import Image from "next/image";
import Foot from "/pages/index/foot";
import Experience from "/JSON/about/experience.json";
import ContactMain from "/JSON/navHead.json";
import Skills from "/JSON/about/skills.json";
import AboutMe from "/JSON/about/aboutme.json";
import Contact from "./index/contact";

export default function About() {
    const data = Experience;
    console.log(AboutMe);
    return (
        <>
            <Nav />
            <Head></Head>

            <div
                className={styles.wrapper}
                // style={{ height: "1400px" }}
            >
                <div style={{ textAlign: "center", margin: "0 auto" }}>
                    <h1>About</h1>
                    <p>私について</p>
                </div>

                <div
                // className={styles.flex}
                >
                    <main
                    // style={{ padding: "1rem", margin: "1rem" }}
                    >
                        <div className={styles.flex}>
                            <div className={styles.aboutmain}>
                                <p>
                                    {AboutMe[0].about}
                                    {/* {關於我的內文} */}
                                </p>
                            </div>
                            <div className={styles.aboutmaintitle}>
                                <Image
                                    // className={styles.aboutimage}
                                    src="/images/DSC_3087.jpg"
                                    alt="Girl"
                                    max-width={100}
                                    width={440}
                                    height={440}
                                    objectFit="cover"
                                />
                            </div>
                        </div>

                        <div className={styles.boxbackground}>
                            <h2
                                style={{
                                    width: "350px",
                                    height: "100px",
                                    paddingLeft: "2rem",
                                }}
                            >
                                Skills — できること —
                            </h2>
                        </div>
                        <div className={styles.skillbox}>
                            {Skills.map(({ skills, main }, i) => (
                                <div
                                    className={styles.Home_card___LpL1}
                                    key={i}
                                >
                                    <div>
                                        <Image
                                            src="/images/DSC_3087.jpg"
                                            alt=""
                                            width={350}
                                            height={250}
                                            objectFit="cover"
                                        />
                                        <h4
                                            style={{
                                                textAlign: "center",
                                            }}
                                        >
                                            {skills}
                                        </h4>
                                        <p style={{ margin: "0" }}>{main}</p>
                                    </div>
                                </div>
                            ))}

                            {/* <div className={styles.boxbackground}>
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
                                                className={styles.careerborder}
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
                            </div> */}
                        </div>
                    </main>
                </div>
            </div>
            <Contact />
            <Foot />
        </>
    );
}
