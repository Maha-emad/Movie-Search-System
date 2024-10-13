import Link from "next/link";
import Logo from "@/assets/images/Logo.svg";
import styles from "./Navbar.module.scss";
import FavIcon from "@/assets/images/FavIcon.svg";
import { appConfig } from "@/config";
import { useRouter } from "next/router";

export const Navbar: React.FC = () => {
	const router = useRouter();
	return (
		<nav className={`${styles.bgBlur} ${styles.nav}`}>
			<div className={`${styles.navbar} container`}>
				<div className={`${styles.logoContent}`}>
					<div className={styles.brand}>
						<Link href="/" aria-current={router.pathname === "404" ? "page" : undefined}>
							<Logo />
						</Link>
					</div>
				</div>

				<div className={`${styles.logoContent}`}>
					<Link
						aria-current={router.pathname === "404" ? "page" : undefined}
						href={`${appConfig.routesMap.favList``}`}
					>
						<FavIcon />
					</Link>
				</div>
			</div>
		</nav>
	);
};
