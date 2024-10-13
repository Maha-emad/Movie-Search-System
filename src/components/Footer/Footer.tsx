import Link from "next/link";
import Logo from "@/assets/images/Logo.svg";
import styles from "./Footer.module.scss";
import { useRouter } from "next/router";

export const Footer: React.FC = () => {
	const router = useRouter();
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer} ${styles.container}`}>
				<div className={styles.top}>
					<div className={styles.brand}>
						<Logo />
					</div>
					<div className={styles.info}>
						<p>
							A fun and personal project created by
							<Link
								aria-current={router.pathname === "404" ? "page" : undefined}
								role="navigation"
								href="https://github.com/Maha-emad"
								className="externalLinks"
								target="_blank"
							>
								{" "}
								Maha Emad
							</Link>
							. Source code available on
							<Link
								aria-current={router.pathname === "404" ? "page" : undefined}
								role="navigation"
								href="https://github.com/Maha-emad/Movie-Search-System"
								className="externalLinks"
								target="_blank"
							>
								{" "}
								Github
							</Link>
							. Open for pull request. Clone and use personally. It's up to you.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
