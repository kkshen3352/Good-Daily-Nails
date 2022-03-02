import Link from "next/link";
import Image from "next/image";
import styles from "/styles/main.module.css";
import IndexMain from "/JSON/index/indexMain.json";

export default function Main() {
    return (
        <>
            <div className={styles.wrapper}>
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
                            src="/images/nails_index.jpg"
                            alt="Good Day Nails"
                            width={480}
                            height={460}
                            objectFit="cover"
                        />
                    </div>
                </div>

                {/* 關於我 */}
                <div className={styles.flex}>
                    <div className={styles.aboutimage}>
                        <Image
                            src="/images/DSC_3087.jpg"
                            alt="Girl"
                            max-width={100}
                            width={440}
                            height={440}
                            objectFit="cover"
                        />
                    </div>
                    <div className={styles.aboutmain}>
                        <h1>{IndexMain.About.title}</h1>
                        <h4>{IndexMain.About.subtitle}</h4>
                        <p className={styles.abouttext}>
                            {IndexMain.About.text}
                        </p>
                        <div
                            style={{
                                textAlign: "right",
                                marginRight: "1.2rem",
                            }}
                        >
                            <Link href="/about" alt="view more" replace>
                                <a>view more</a>
                            </Link>
                        </div>
                        <div
                            style={{ textAlign: "right", marginTop: "-0.5rem" }}
                        >
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
            </div>
        </>
    );
}
