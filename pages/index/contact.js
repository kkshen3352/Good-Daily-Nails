import Link from "next/link";
import styles from "/styles/aection.module.css";
import Navhead from "/JSON/navHead.json";

export default function Contact() {
    return (
        <>
            <section className={styles.backcontact}>
                <div
                    style={{
                        textAlign: "center",
                        margin: "1rem auto",
                        padding: "2rem",
                    }}
                >
                    <h1>{Navhead[3].name}</h1>
                    <p>{Navhead[3].suntitle}</p>
                    <br />
                    <p>{Navhead[3].text}</p>

                    <Link href="/contact">
                        <a>
                            <div className={styles.workbutton}>
                                {Navhead[3].button}
                            </div>
                        </a>
                    </Link>
                </div>
            </section>
        </>
    );
}
