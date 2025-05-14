import Footer from "@/components/Footer";
import AboutSection from "./about/page";
import ProjectsSection from "./projects/page";
import ContactSection from "./contact/page";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4  py-6">
        <h1 className="text-[5rem] sm:text-[6rem] md:text-[8rem] font-black leading-tight text-center md:text-left text-white">
          <span className="block">Konrad</span>
          <span className="block">Hendley</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 dark:text-gray-300 max-w-xl text-center md:text-left">
          I’m a full-stack developer based in Denver, CO, passionate about building fast, accessible, and user-friendly web applications.
        </p>
      </section>
 
        <AboutSection />
        <ProjectsSection />
        <ContactSection />

      <Footer/>
    </main>
  );
}