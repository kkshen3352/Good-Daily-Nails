import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.css";

export default function Main() {
    return (
        <>
            <div className={styles.flex}>
                <h1 className={(styles.mainbox, styles.maintitle)}>
                    Good Daily Nails
                    <p style={{ fontSize: "23px" }}>Girl Nail Design</p>
                    <p style={{ fontSize: "23px" }}>
                        お客さまと共に課題に向き合い、
                        <br />
                        効果的なデザインをご提案いたします。
                    </p>
                </h1>
                <div className={styles.mainimage}>
                    <Image
                        src="/images/DSC_9610.jpg"
                        alt="Good Day Nails"
                        max-width={100}
                        width={520}
                        height={500}
                    />
                </div>
            </div>

            {/* 關於我 */}
            <div
                className={styles.flex}
                style={{ margin: "3rem auto 2rem", padding: "3rem" }}
            >
                <div>
                    <Image
                        src="/images/DSC_3087.jpg"
                        alt="Girl"
                        max-width={100}
                        width={440}
                        height={440}
                        objectFit="cover"
                    />
                </div>
                <div
                    style={{
                        margin: "3rem",
                        padding: "3rem",
                        backgroundColor: "#e4cdbb",
                    }}
                >
                    <h1 style={{ width: "350px", textAlign: "left" }}>About</h1>
                    <p>私について</p>
                    <p>
                        ...............................................................................................
                    </p>
                    <p>
                        ...............................................................................................
                    </p>
                    <p>
                        ...............................................................................................
                    </p>
                    <div
                        style={{
                            textAlign: "right",
                            marginRight: "1.2rem",
                        }}
                    >
                        <Link href="/about" replace>
                            <a>view more</a>
                        </Link>
                    </div>
                    <div style={{ textAlign: "right", marginTop: "-0.5rem" }}>
                        <Image
                            src="/images/arrow.png"
                            alt="arrow"
                            max-width={100}
                            width={100}
                            height={5}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                {/* <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>
                Find in-depth information about Next.js features and
                API.
            </p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>
                Learn about Next.js in an interactive course with
                quizzes!
            </p>
        </a>

        <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
        >
            <h2>Examples &rarr;</h2>
            <p>
                Discover and deploy boilerplate example Next.js
                projects.
            </p>
        </a>

        <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
        >
            <h2>Deploy &rarr;</h2>
            <p>
                Instantly deploy your Next.js site to a public URL
                with Vercel.
            </p>
        </a> */}
            </div>
        </>
    );
}
