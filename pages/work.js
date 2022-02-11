import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Menu from "/JSON/work/menu.json";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export default function work({ allPostsData }) {
    return (
        <>
            <Layout work>
                <Head>
                    <title>{siteTitle}</title>
                </Head>

                <div className={styles.wrapper}>
                    <section className={styles.flex}>
                        <aside className={styles.workmeun}>
                            <li>
                                {Menu.map(({ text, more }, i) => (
                                    <ul key={i} style={{margin:"0"}}>
                                        <Link href={more} replace>
                                            <a className={styles.flex}>
                                                <p>—</p>
                                                <p>{text}</p>
                                                </a>
                                        </Link>
                                    </ul>
                                ))}
                            </li>
                        </aside>

                        <main>
                            <div
                                className={styles.Skillsbox}
                                style={{
                                    textAlign: "left",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {allPostsData.map(({ id, title, name }, i) => (
                                    <div
                                        style={{
                                            flexDirection: "column",
                                            marginTop: "2rem",
                                        }}
                                        key={i}
                                    >
                                        <div className={styles.worktitlecenter}>
                                            <p
                                                className={styles.boxbackground}
                                            ></p>
                                            <h2
                                                style={{
                                                    marginLeft: "1rem",
                                                }}
                                            >
                                                {name} — {title}
                                            </h2>
                                        </div>
                                        <div
                                            className={styles.Work_card___LpL1}
                                        >
                                            <Image
                                                className={
                                                    styles.Work_card___LpL1Image
                                                }
                                                src="/images/DSC_9610.jpg"
                                                alt=""
                                                width={600}
                                                height={400}
                                            />

                                            <Link href={`/posts/${id}`}>
                                                <a className={styles.workinfo}>
                                                    <p
                                                        style={{
                                                            marginTop: "40px",
                                                        }}
                                                    >
                                                        {title}
                                                    </p>
                                                </a>
                                            </Link>
                                            <p
                                                id={title}
                                                style={{ visibility: "hidden" }}
                                            >
                                                {name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </main>
                    </section>
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

// <li className={utilStyles.listItem} key={id}>
//     <Link href={`/posts/${id}`}>
//         <a>{title}</a>
//     </Link>
//     <br />
//     <small className={utilStyles.lightText}>
//                                             <Date dateString={date} />
//                                         </small>
// </li>;

// {ImageMain.map(({ more, text, text1 }, i) => (
//     <div
//         style={{ flexDirection: "column" }}
//         key={i}
//     >
//         <div className={styles.worktitlecenter}>
//             <p
//                 className={styles.boxbackground}
//             ></p>
//             <h2
//                 style={{ marginLeft: "1rem" }}
//                 id={more}
//             >
//                 {text} — {text1}
//             </h2>
//         </div>
//         {/* 內容 */}
//         <div
//             className={styles.Work_card___LpL1}
//         >
//             <Image
//                 className={
//                     styles.Work_card___LpL1Image
//                 }
//                 src="/images/DSC_9610.jpg"
//                 alt=""
//                 width={600}
//                 height={400}
//             />

//             <Link href={`/work/${more}`}>
//                 <a className={styles.workinfo}>
//                     <p
//                         style={{
//                             marginTop: "40px",
//                         }}
//                     >
//                         {text}
//                         <br />
//                         {text1}
//                     </p>
//                 </a>
//             </Link>
//         </div>
//     </div>
// ))}
