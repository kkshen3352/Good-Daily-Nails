import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "/components/menu/menu.module.css";
import NavMenu from "/JSON/navHead.json";
import LinkConfig from "/JSON/index/link_config.json";

export default function CurtainMenu() {
    const linkdata = LinkConfig;

    const [open, setOpen] = useState(false);
    const container = useRef(null);
    const handleClickOutside = (event) => {
        if (container.current && !container.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <>
            <div className={styles.container} ref={container}>
                {/* <button
                    type="button"
                    className={styles.button}
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button> */}
                <div className={styles.menu} onClick={() => setOpen(!open)}>
                    <div
                        className={
                            open ? `${styles.activebar1}` : `${styles.bar}`
                        }
                    ></div>
                    <div
                        className={
                            open ? `${styles.activebar2}` : `${styles.bar}`
                        }
                    ></div>
                    <div
                        className={
                            open ? `${styles.activebar3}` : `${styles.bar}`
                        }
                    ></div>
                </div>
                <div className={styles.dropdown_wrapper}>
                    <ul
                        className={
                            open
                                ? `${styles.dropdown_menu}`
                                : `${styles.dropdown_menu_close}`
                        }
                    >
                        <div
                            style={{
                                width: "200px",
                                height: "150px",
                            }}
                        ></div>
                        {NavMenu.map(({ name, link }, i) => (
                            <li key={i} className={styles.dropdown_menu__item}>
                                <Link href={link}>
                                    <a>{name}</a>
                                </Link>
                            </li>
                        ))}
                        <div className={styles.globalnavitemsns}>
                            <Link
                                classNam={styles.nsicon}
                                href={linkdata[0].href}
                                replace
                            >
                                <a>
                                    <Image
                                        src={linkdata[0].src}
                                        alt={linkdata[0].alt}
                                        width={32}
                                        height={32}
                                    />
                                </a>
                            </Link>
                            <Link
                                classNam={styles.nsicon}
                                href={linkdata[1].href}
                                replace
                            >
                                <a>
                                    <Image
                                        src={linkdata[1].src}
                                        alt={linkdata[1].alt}
                                        width={32}
                                        height={32}
                                    />
                                </a>
                            </Link>
                            <Link
                                classNam={styles.nsicon}
                                href={linkdata[2].href}
                                replace
                            >
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
                    </ul>
                </div>
            </div>
        </>
    );
}
