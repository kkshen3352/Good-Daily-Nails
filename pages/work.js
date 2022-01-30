import Link from "next/link";
import Nav from "../pages/index/nav";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
    return (
        <>
            <Nav />
            <Head></Head>

            <div className={styles.container}>
                <div style={{ textAlign: "center", margin: "0 auto" }}>
                    <h1>Work</h1>
                    <p>制作したもの</p>
                </div>

                <div className={styles.flex}>
                    <aside className={styles.aside}>
                        <li className={styles.asideli}>
                            <ul>title1</ul>
                            <ul>title2</ul>
                            <ul>title3</ul>
                            <ul>title4</ul>
                        </li>
                    </aside>

                    <main>Hello</main>
                </div>
            </div>
        </>
    );
}
