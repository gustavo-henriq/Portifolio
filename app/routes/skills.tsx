import { SiTypescript, SiJavascript, SiPython, SiReact, SiGit, SiLinux, SiNextdotjs, SiMysql, SiGooglecloud } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import '../styles/skills.css'
import { Reveal } from "../components/Reveal";
import type { Language } from "../types";

const skills = [
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "MySQL", icon: SiMysql },
    { name: "REST APIs", icon: TbApi },
    { name: "Git", icon: SiGit },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "Linux", icon: SiLinux },
];

export function Skills({ language }: { language: Language }) {
    return (
        <Reveal id="skills" className="skillsContainer">
            <h2 className="skillsHeadline">
                {language === "en" ? "My " : "Minhas "}<span className="bold">{language === "en" ? "Skills" : "Habilidades"}</span>
            </h2>
            <div className="skills">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <Reveal key={skill.name} className="skill" delay={index * 70}>
                            <span className="skillIconFrame">
                                <Icon className="skillIcon" />
                            </span>
                            <h3 className="skillTitle">{skill.name}</h3>
                        </Reveal>
                    );
                })}
            </div>
        </Reveal>
    )
}
