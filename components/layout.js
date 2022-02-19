import Head from "next/head";
import styles from "/styles/work/work.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Nav from "../pages/index/nav";
import Foot from "../pages/index/foot";
import Title from "/JSON/navHead.json";
import Menu from "/JSON/work/menu.json";

export const siteTitle = "Good Daily Nails";

export default function Layout({ children, work }) {
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
                                <a
                                    className={utilStyles.colorInherit}
                                    style={{ textAlign: "center" }}
                                >
                                    <h1>{Title[1].name}</h1>
                                    <p>{Title[1].subtitle}</p>
                                </a>
                            </Link>
                        </>
                    )}
                </header>
                <section>
                    <div 
                    className={styles.container}
                    >
                        <Head>
                            <link rel="icon" href="/favicon.ico" />
                            <meta
                                name="description"
                                content="Learn how to build a personal website using Next.js"
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
                            <div className={styles.backToHome}>
                                <Link href="/work">
                                    <a>← Back to work</a>
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
