import Link from "next/link";
import Image from "next/image";
import styles from "/styles/nav.module.css";
import navHead from "/JSON/navHead.json";
import LinkConfig from "/JSON/index/link_config.json";
import Menu from "/components/menu/curtain_menu";
import ScrollTop from "/components/scrolltop/scrolltop";
import React, { useState, useEffect } from "react";

export default function Nav() {
    const linkdata = LinkConfig;

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
        <nav className={styles.wrapper} onClick={() => reScroll(!restyle)}>
            <p style={{ height: "80px" }}></p>
            {/* 卡位用 */}
            <div className={styles.nav}>
                <Link href="/" replace>
                    <a>
                        <img
                            src="/images/LOGO.jpg"
                            alt="女子の日常LOGO"
                            width={70}
                            height={70}
                            style={{
                                width: "70px",
                                marginLeft: "0.5rem",
                            }}
                        />
                    </a>
                </Link>
                <div className={styles.navbox}></div>
                <div className={styles.navp}>
                    <ul className={styles.flex}>
                        <li>
                            {navHead.map(({ name, link }, i) => (
                                <Link href={link} replace key={i}>
                                    <a className={styles.navrwd}>{name}</a>
                                </Link>
                            ))}
                        </li>
                        <Menu />
                    </ul>
                </div>
            </div>
            <div className={styles.globalnavitemsns}>
                <Link classNam={styles.nsicon} href={linkdata[0].href} replace>
                    <a>
                        <Image
                            src={linkdata[0].src}
                            alt={linkdata[0].alt}
                            width={32}
                            height={32}
                        />
                    </a>
                </Link>
                <Link classNam={styles.nsicon} href={linkdata[1].href} replace>
                    <a>
                        <Image
                            src={linkdata[1].src}
                            alt={linkdata[1].alt}
                            width={32}
                            height={32}
                        />
                    </a>
                </Link>
                <Link classNam={styles.nsicon} href={linkdata[2].href} replace>
                    <a>
                        <Image
                            src={linkdata[2].src}
                            alt={linkdata[2].alt}
                            width={36}
                            height={36}
                        />
                    </a>
                </Link>
            </div>
            <ScrollTop />
        </nav>
    );
}
