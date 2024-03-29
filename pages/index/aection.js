import Link from "next/link";
import styles from "/styles/aection.module.css";
import Image from "next/image";
import Navhead from "/JSON/navHead.json";
import Imagework from "/JSON/index/imageWork.json";
import Contact from "../index/contact";

export default function aection() {
    return (
        <>
            <section className={styles.back}>
                <h1
                    style={{
                        textAlign: "center",
                        margin: "1.5rem",
                        padding: "1.5rem",
                    }}
                >
                    {Navhead[1].name}
                </h1>
                <div className={styles.workmain}>
                    <div>
                        {Imagework.map(({ text, text1, more, imgsrc }, i) => (
                            <div className={styles.Home_card___LpL1} key={i}>
                                <Image
                                    className={styles.Home_card___LpL1Image}
                                    src={imgsrc}
                                    alt=""
                                    // max-width={100}
                                    width={360}
                                    height={223}
                                    objectFit={"cover"}
                                />
                                <Link href={`/posts/${more}`}>
                                    <a className={styles.info}>
                                        <p style={{ marginTop: "40px" }}>
                                            {text}
                                            <br />
                                            {text1}
                                        </p>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Link href={Navhead[1].link} replace>
                        <a>
                            <div className={styles.workbutton}>
                                {Navhead[5].link}
                            </div>
                        </a>
                    </Link>
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
            </section>

            <Contact />
            {/* <section className={styles.backcontact}>
                <div
                    style={{
                        textAlign: "center",
                        margin: "1rem auto",
                        padding: "2rem",
                    }}
                >
                    <h1>{Navhead[2].name}</h1>
                    <p>{Navhead[2].suntitle}</p>
                    <br />
                    <p>{Navhead[2].text}</p>

                    <Link href="/contact">
                        <a>
                            <div className={styles.workbutton}>
                                {Navhead[2].button}
                            </div>
                        </a>
                    </Link>
                </div>
            </section> */}
        </>
    );
}
