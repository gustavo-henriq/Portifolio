import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Header } from "./header"
import { Hero } from "../routes/hero"
import { Skills } from "./skills";
import { Projects } from "./projects";
import { AboutMe } from "./aboutme";
import { Contact } from "./contact";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  )
}
