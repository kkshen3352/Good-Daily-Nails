import Link from "next/link";
import Nav from "../pages/index/nav";
import Head from "next/head";
import styles from "../styles/resever/resever.module.css";
import Image from "next/image";
import Foot from "/pages/index/foot";
import resever from "/JSON/resever/resever.json";

export default function Reserve() {
    const titledata = resever[0].reseverhead;
    const maindata = resever[1].resevermain;
    // console.log(maindata)
    // console.log(Title)
    return (
        <>
            <Nav />
            <div className={styles.wrapper}>
                <div className={styles.resevertitle}>
                    <div className={styles.flex}>
                    <h1>{titledata.title}</h1>
                    <p>&ensp;&ensp;{titledata.subtitle}</p></div>
                </div>
                <div className={styles.reseverbox}>
                    {maindata.map(({ main }, i) => (
                        <ul key={i}>
                            <li>{main}</li>
                        </ul>
                    ))}
                    <div style={{ height: "35px" }}></div>
                </div>
            </div>
            <Foot />
        </>
    );
}
