import Link from "next/link";
import styles from "/styles/Home.module.css";
import Image from "next/image";
import Navhead from "/JSON/navHead.json";
import Imagework from "/JSON/index/imageWork.json"

export default function aection() {
    
    return (
        <>
            <section className={styles.back}>
                <h1
                    style={{
                        textAlign: "center",
                        margin: "2rem",
                        padding: "2rem",
                    }}
                >
                    {Navhead[1].name}
                </h1>
                <div
                    style={{
                        width: "960px",
                        height: "440px",
                        margin: "0 auto",
                        padding: "0",
                    }}
                    // 更改背景框度
                >
                    <div>
                        {Imagework.map(({ text, text1, more,imgsrc }, i) => (
                            <div className={styles.Home_card___LpL1} key={i}>
                                <Image
                                    className={styles.Home_card___LpL1Image}
                                    src={imgsrc}
                                    alt=""
                                    width={360}
                                    height={223}
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
                <div
                    style={{
                        paddingTop: "10px",
                        textAlign: "center",
                        margin: "0 auto",
                        border: "1px solid black",
                        width: "250px",
                        height: "50px",
                    }}
                >
                    <Link href="/work" replace>
                        <a>{Navhead[3].link}</a>
                    </Link>
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
            </section>

            <section>
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
                            <a>{Navhead[2].button}</a>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}
