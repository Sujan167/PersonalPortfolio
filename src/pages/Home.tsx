import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/layouts/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { Helmet } from "react-helmet";

export default function Home() {
	return (
		<>
			<Helmet>
				<title>Sujan Basnet | Software Developer & DevOps Engineer</title>
				<meta name="description" content="Portfolio of Sujan Basnet, a Software Developer and DevOps Engineer with 3 years of experience building scalable distributed systems." />
			</Helmet>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
}
