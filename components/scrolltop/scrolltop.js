import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./scrolltop.module.css";
export default function ScrollTop() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        document.addEventListener("scroll", checkScrollTop);
        return () => {
            // clean up
            document.removeEventListener("scroll", checkScrollTop);
        };
    });

    return (
        <>
            <div
                className={
                    showScroll
                        ? `${styles.scrollTop}`
                        : `${styles.scrollTophidden}`
                }
                // className={styles.scrollTop}
                onClick={() => scrollTop(!showScroll)}
            >
                <Image
                    src="/images/Backtotop2.png"
                    alt="scrolltop"
                    width={30}
                    height={30}
                />
            </div>
        </>
    );
}
