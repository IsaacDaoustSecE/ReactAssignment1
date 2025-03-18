import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>sleep.track</h1>
                <ol>
                    <li>Start tracking your sleep</li>
                    <li>Identify problems and patterns</li>
                    <li>Sleep better and feel healthier</li>
                </ol>

                <div className={styles.ctas}>
                    <a
                        className={styles.primary}
                        href="/tracker"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/moon.svg"
                            alt="Moon icon"
                            width={20}
                            height={20}
                        />
                        Track now
                    </a>
                    <a
                        href="/about"
                        rel="noopener noreferrer"
                        className={styles.secondary}
                    >
                        Why sleep?
                    </a>
                </div>
            </main>
        </div>
    );
}
