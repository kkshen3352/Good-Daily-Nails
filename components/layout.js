import Head from "next/head";
import styles from "/styles/work/work.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Nav from "../pages/index/nav";
import Foot from "../pages/index/foot";
import Title from "/JSON/navHead.json";
import Menu from "/JSON/work/menu.json";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export const siteTitle = "女子の日常-工作項目";

export default function Layout({ children, work }) {
    const [out, setOut] = useState(false);

    const checkScrollTop = () => {
        if (!out && window.pageYOffset > 1) {
            setOut(true);
        } else if (out && window.pageYOffset <= 0) {
            setOut(false);
        }
    };

    const scrollOut = () => {
        document.documentElement.style.scrollBehavior = "smooth";
    };

    useEffect(() => {
        document.addEventListener("scroll", checkScrollTop);
        return () => {
            // clean up
            document.removeEventListener("scroll", checkScrollTop);
        };
    });

    return (
        <>
            <Nav />
            <div>
                <header className={styles.header}>
                    {work ? (
                        <>
                            <div>
                                <h1>{Title[1].name}</h1>
                                <p>{Title[1].subtitle}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/work">
                                <a className={utilStyles.colorInherit}>
                                    <h1>{Title[1].name}</h1>
                                    <p>{Title[1].subtitle}</p>
                                </a>
                            </Link>
                        </>
                    )}
                </header>
                <section>
                    <div className={styles.container}>
                        <Head>
                            <link rel="icon" href="/images/LOGO.jpg" />
                            <meta
                                name="description"
                                content="女子の日常-工作項目"
                            />
                            <meta
                                property="og:image"
                                content={`https://og-image.vercel.app/${encodeURI(
                                    siteTitle
                                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                            />
                            <meta name="og:title" content={siteTitle} />
                            <meta
                                name="twitter:card"
                                content="summary_large_image"
                            />
                        </Head>

                        <main className={styles.main}>
                            <aside className={styles.workmeun}>
                                {work ? (
                                    <>
                                        <li>
                                            {Menu.map(({ text, more }, i) => (
                                                <ul
                                                    key={i}
                                                    style={{ margin: "0" }}
                                                    onClick={() =>
                                                        scrollOut(!out)
                                                    }
                                                >
                                                    <Link href={more}>
                                                        <a
                                                            className={
                                                                styles.flex
                                                            }
                                                        >
                                                            <p>—&ensp;{text}</p>
                                                        </a>
                                                    </Link>
                                                </ul>
                                            ))}
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            {Menu.map(
                                                ({ text, moreposts }, i) => (
                                                    <ul
                                                        key={i}
                                                        style={{ margin: "0" }}
                                                    >
                                                        <Link href={moreposts}>
                                                            <a
                                                                className={
                                                                    styles.flex
                                                                }
                                                            >
                                                                <p>
                                                                    —&ensp;
                                                                    {text}
                                                                </p>
                                                            </a>
                                                        </Link>
                                                    </ul>
                                                )
                                            )}
                                        </li>
                                    </>
                                )}
                            </aside>
                            {children}
                        </main>
                        {!work && (
                            <div>
                                <Link href="/work">
                                    <a className={styles.backtext}>
                                        <p>Back</p>
                                        <Image
                                            className={styles.backToHome}
                                            src="/images/arrow.png"
                                            alt="arrow"
                                            max-width={100}
                                            width={100}
                                            height={5}
                                        />
                                    </a>
                                </Link>
                            </div>
                        )}
                    </div>
                </section>
            </div>
            <Foot />
        </>
    );
}
