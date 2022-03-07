import Link from "next/link";
import styles from "/styles/aection.module.css";
import Navhead from "/JSON/navHead.json";
import React, { useState, useEffect } from "react";

export default function Contact() {
    const [restyle, setRestyle] = useState(false);

    const checkScroll = () => {
        if (!restyle && window.pageYOffset > 1) {
            setRestyle(true);
        } else if (restyle && window.pageYOffset <= 0) {
            setRestyle(false);
        }
    };

    const reScroll = () => {
        document.documentElement.style.scrollBehavior = "auto";
    };

    useEffect(() => {
        document.addEventListener("scroll", checkScroll);
        return () => {
            // clean up
            document.removeEventListener("scroll", checkScroll);
        };
    });
    return (
        <>
            <section className={styles.backcontact}>
                <div
                    onClick={() => reScroll(!restyle)}
                    style={{
                        textAlign: "center",
                        margin: "1rem auto",
                        padding: "2rem",
                    }}
                >
                    <h1>{Navhead[4].name}</h1>
                    <p>{Navhead[4].suntitle}</p>
                    <br />
                    <p>{Navhead[4].text}</p>

                    <Link href="/contact">
                        <a>
                            <div className={styles.workbutton}>
                                {Navhead[4].button}
                            </div>
                        </a>
                    </Link>
                </div>
            </section>
        </>
    );
}
