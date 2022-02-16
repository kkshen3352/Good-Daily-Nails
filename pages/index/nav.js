import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import navHead from "/JSON/navHead.json";
import LinkConfig from "/JSON/index/link_config.json"
import Menu from "/components/curtain_menu"

export default function Nav() {
    const linkdata = LinkConfig
    return (
        <nav className={styles.wrapper}>
            <p style={{ height: "80px" }}></p>
            {/* 卡位用 */}
            <div className={styles.nav}>
                <Link href="/" replace>
                    <img src="/images/LOGO.jpg" alt="" width={70} height={70} />
                    {/* <a className={styles.nav}>女子の日常</a> */}
                </Link>
                <div className={styles.navbox}></div>
                {/* 卡位用 */}
                <div className={styles.navp}>
                    <ul className={styles.flex}>
                        <li>
                            {navHead.map(({ name, link }, i) => (
                                <Link href={link} replace key={i}>
                                    <a>{name}</a>
                                </Link>
                            ))}
                        </li>
                        <Menu />
                    </ul>
                </div>
            </div>
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
        </nav>
    );
}
