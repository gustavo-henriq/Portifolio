import "../styles/header.css"
export function Header() {
    return (
        <div className="headerContainer">
            <div className="logo">
                <div className="logoImg"></div>
                <h1 className="logoText">Henrik</h1>
            </div>
            <div className="headerRoutes">
                <ul className="headerList">
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                </ul>
            </div>
            <button className="cvDownload">Download CV</button>
        </div >
    )
}