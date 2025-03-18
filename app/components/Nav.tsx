import Image from "next/image";

import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className={styles.root}>
            <Link href="/" rel="noopener noreferrer">
                <Image
                    aria-hidden
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                />
                Home
            </Link>
            <Link href="/tracker" rel="noopener noreferrer">
                <Image
                    aria-hidden
                    src="/window.svg"
                    alt="Window icon"
                    width={16}
                    height={16}
                />
                Tracker
            </Link>
            <Link href="/about" rel="noopener noreferrer">
                <Image
                    aria-hidden
                    src="/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
                About
            </Link>
        </nav>
    );
}
