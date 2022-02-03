import Link from "next/link";
import styles from "/styles/Home.module.css";
import Image from "next/image";

export default function aection() {
    const main = [
        { text: "maintainance", imgsrc: "", more: "maintainance" },
        { text: "gel", imgsrc: "", more: "gel" },
        { text: "disarm", imgsrc: "", more: "disarm" },
        { text: "customized", imgsrc: "", more: "customized" },
        { text: "teaching", imgsrc: "", more: "teaching" },
        { text: "eyelash", imgsrc: "", more: "eyelash" },
    ];
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
                    Work
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
                        {main.map(({ text, more }, i) => (
                            <div className={styles.Home_card___LpL1} key={i}>
                                <Image
                                    className={styles.Home_card___LpL1Image}
                                    src="/images/DSC_9610.jpg"
                                    alt=""
                                    width={360}
                                    height={223}
                                />
                                <Link href={`/work/${more}`}>
                                    <a className={styles.info}>
                                        <p style={{ marginTop: "60px" }}>
                                            {text}
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
                        <a>view more</a>
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
        </>
    );
}
