import Link from "next/link";
import NotFound from "@/assets/images/404.svg";
import { useRouter } from "next/router";

export const Error404: React.FC = () => {
	const router = useRouter();
	return (
		<div className="page container">
			<NotFound />
			<h2>Lost your way?</h2>
			<p>Oops! This is awkward. You are looking for something that doesn't actually exist.</p>
			<Link href="/" className="btn" aria-current={router.pathname === "404" ? "page" : undefined}>
				Go Home
			</Link>
		</div>
	);
};
