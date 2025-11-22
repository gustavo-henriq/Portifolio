import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import "../styles/contact.css";

export function Contact() {
    return (
        <div className="contactContainer">
            <div className="contactForm">
                <input type="text" placeholder="Your Name"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Your Product (if exists)"></input>
                <textarea placeholder="How can I help?"></textarea>
                <div className="contactButtons">
                    <button>Send</button>
                    <a href="mailto:gustavo.hs369@gmail.com" className="contactIcon">
                        <MdEmail />
                    </a>
                    <a href="https://github.com/henrikdeveloper" target="_blank" rel="noopener noreferrer" className="contactIcon">
                        <FaGithub />
                    </a>
                </div>
            </div>

            <div className="contactDescription">
                <p className="contactHeadliner">Let's get in touch!</p>
                <p><span className="bold">gustavo.hs369@gmail.com</span></p>
                <p><span className="bold">+55 81 99515-4915</span></p>
            </div>
        </div>
    )
}