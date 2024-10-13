import React from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};
