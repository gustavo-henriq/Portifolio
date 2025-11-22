import "../styles/projects.css";


const projects = [
    { name: "Lumiere", imgsrc: "", description: "Lumiere is a web-based movie recommendation system designed to help users discover films they'll love. ", link: "https://henrikdeveloper.github.io/Lumiere/" },
    { name: "Pomodoro Timer", imgsrc: "", description: "A pomodoro timer app built with React and Javascript", link: "https://pomodoro-app-sage-nu.vercel.app/" },
    { name: "ToDo", imgsrc: "", description: "A web application that allows users to create and manage tasks", link: "https://github.com/henrikdeveloper/To-Do" },
]

export function Projects() {
    return (
        <div className="projectsContainer">
            <h1 className="projectsHeadliner"><b>Projects</b></h1>
            <div className="projects">
                {projects.map((project) => {
                    return (
                        <div key={project.name} className="project" onClick={() => window.open(project.link)}>
                            <img src={project.imgsrc} className="projectImage" alt="" />
                            <h2 className="projectTitle">{project.name}</h2>
                            <p className="projectDescription">{project.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
