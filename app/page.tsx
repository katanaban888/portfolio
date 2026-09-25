import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Tools } from "@/components/tools";
import { Approach } from "@/components/approach";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <Experience />
        <Tools />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
