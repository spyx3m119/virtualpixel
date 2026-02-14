import type { Route } from "./+types/home";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { BentoGrid } from "../components/BentoGrid";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Virtual Pixel - Future of Shopify Apps" },
    { name: "description", content: "Building the next generation of Shopify apps for conversion, performance, and growth." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
