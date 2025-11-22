import "../styles/hero.css"
export function Hero() {
    return (
        <div className="heroContainer">
            <div className="heroText">
                <div className="blob"></div>
                <div className="blob2"></div>

                <h1 className="heroHeadline">
                    Hello, I'm <span className="bold">Henrik</span>
                </h1>
                <h1 className="heroSubline">
                    <span className="bold">Fullstack Developer</span>
                </h1>
                <h1 className="heroSubline">
                    Based in <span className="bold">Brazil.</span>
                </h1>
                <h1 className="heroDescription">
                    I'm a fullstack developer with a passion for creating innovative and user-friendly web applications.
                </h1>
                <button className="heroCTA">
                    Contact Me
                </button>
            </div>
            <div className="heroImage">
            </div>
        </div>
    )
}