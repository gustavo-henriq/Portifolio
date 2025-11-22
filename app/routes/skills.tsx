import { SiTypescript, SiJavascript, SiPython, SiReact, SiAngular, SiElectron, SiGit, SiVim, SiFigma, SiLinux, SiNextdotjs, SiNodedotjs, SiMysql, SiGooglecloud } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import '../styles/skills.css'

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

export function Skills() {
    return (
        <div className="skillsContainer">
            <h1 className="skillsHeadline">My <span className="bold">Skills</span></h1>
            <div className="skills">
                {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                        <div key={skill.name} className="skill">
                            <Icon className="skillIcon" />
                            <h2 className="skillTitle">{skill.name}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}