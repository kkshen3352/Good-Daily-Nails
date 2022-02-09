import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import IndexMain from "/JSON/index/indexMain.json";

export default function Main() {
    return (
        <>
            <div className={styles.flex}>
                <h1 className={(styles.mainbox, styles.maintitle)}>
                    {IndexMain.Main.title}
                    <p style={{ fontSize: "23px" }}>
                        {IndexMain.Main.subtitle}
                    </p>
                    <p style={{ fontSize: "23px" }}>
                        {IndexMain.Main.text}
                        <br />
                        {IndexMain.Main.subtext}
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
                    <h1 style={{ width: "350px", textAlign: "left" }}>
                        {IndexMain.About.title}
                    </h1>
                    <p>{IndexMain.About.subtitle}</p>
                    <p>
                        {IndexMain.About.text}
                        <br />
                        {IndexMain.About.text1}
                        <br />
                        {IndexMain.About.text2}
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
        </>
    );
}
