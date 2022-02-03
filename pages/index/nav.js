import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.css";

export default function Nav() {
    return (
        <nav className={styles.wrapper}>
            <p style={{ height: "80px" }}></p>
            {/* 卡位用 */}
            <div className={styles.nav}>
                <Link href="/" replace>
                    <img
                        src="/images/LOGO.jpg"
                        alt=""
                        maxWidth={100}
                        width={70}
                        height={70}
                    />
                    {/* <a className={styles.nav}>女子の日常</a> */}
                </Link>
                <div className={styles.navbox}></div>
                {/* 卡位用 */}
                <div className={styles.navp}>
                    <ul className={styles.flex}>
                        <li>
                            <Link href="/about" replace>
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/work" replace>
                                <a>Work</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" replace>
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.globalnavitemsns}>
                <Link
                    classNam={styles.nsicon}
                    href="https://www.facebook.com/Lk330825"
                    replace
                >
                    <a>
                        <Image
                            src="/images/facebook.png"
                            alt="facebook Logo"
                            width={32}
                            height={32}
                        />
                    </a>
                </Link>
                <Link
                    classNam={styles.nsicon}
                    href="https://www.instagram.com/good_daily_nails/"
                    replace
                >
                    <a>
                        <Image
                            src="/images/instagram.png"
                            alt="instagram Logo"
                            width={32}
                            height={32}
                        />
                    </a>
                </Link>
                <Link
                    classNam={styles.nsicon}
                    href="https://line.me/R/ti/p/%40vea0066b"
                    replace
                >
                    <a>
                        <Image
                            src="/images/line.png"
                            alt="line Logo"
                            width={36}
                            height={36}
                        />
                    </a>
                </Link>
            </div>
        </nav>
    );
}
