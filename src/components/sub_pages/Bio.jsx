import { SectionTitle } from "../utils/Section_Title";
import "../../styles/sub_pages/Bio.css";
import "../../styles/utils/site_color.css";

export const Bio = ({ page = "home" }) => {
    return (
        <div className="bio-section">
            <SectionTitle>{page === "about" ? "About Me" : "Introduction"}</SectionTitle>
            {page === "about" ? <LongBio /> : <ShortBio />}
        </div>
    );
};

const ShortBio = () => {
    return (
        <div className="bio-container">
            <p className="primary-text">My name is David Litton. I am a Software Engineering student at the Milwaukee School of Engineering, graduating May 2026. Currently I am balancing work, school, and a leadership role as the Webmaster for MSOE's Society of Software Engineers club.</p>
        </div>
    );
};

const LongBio = () => {
    return (
        <div className="bio-container primary-text">
            <p>Hello! My name is David Litton. I am a Software Engineering student at Milwaukee School of Engineering, and my expected graduation date is May 2026. During my various internships, I've had the opportunity to work in a variety of software roles, from embedded Linux systems to cloud distributed systems with AWS. These experiences have given me a well-rounded perspective and the ability to adapt to different technologies and challenges.</p>
            <p>Currently, I am juggling working, school, and staying involved in campus life. I serve as the Webmaster for the Society of Software Engineers club and as Secretary of the biking club. These roles have enabled me to contribute to my community and develop my leadership skills alongside my technical work.</p>
            <p>When not coding or studying, I love to unwind by biking, snowboarding, and playing video games. I'm a big fan of sci-fi media like Doctor Who, Star Wars, and similar franchises. I'm also passionate about mechanical keyboards. My current favorite is a Corne 42-key split keyboard.</p>
            <p>I'm always eager to learn more, grow my skills, and explore the intersection of software and hardware as I prepare for a career in software engineering.</p>
        </div>
    );
};