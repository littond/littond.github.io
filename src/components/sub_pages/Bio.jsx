import { info } from "../../scripts/getInfo";

const longBio = "Hi, I'm David Litton, a Software Engineering student at Milwaukee School of Engineering with an expected graduation date of May 2026. I've had the opportunity to work across a variety of software roles, from embedded Linux systems to cloud computing with AWS. These experiences have given me a well-rounded perspective and the ability to adapt to different technologies and challenges. I'm particularly excited about expanding my hardware knowledge as I'll be assisting my senior design team next school year in building a more portable oscilloscope. This project will allow me to bridge my software skills with hardware design, which I'm really looking forward to. Currently, I juggle work and school while staying involved in campus life. I serve as the webmaster for the Society of Software Engineers club and as secretary of the bike club. These roles allow me to contribute to my community and develop leadership skills alongside my technical work. When I'm not coding or studying, I love to unwind by biking, snowboarding, and playing video games. I'm a big fan of sci-fi media like Doctor Who, Star Wars, and similar franchises, which fuel my imagination and curiosity. I'm also passionate about mechanical keyboards—my favorite is a Korn 6-column layout, which combines comfort and efficiency perfectly for long hours of typing and tinkering. I'm always eager to learn more, grow my skills, and explore the intersection of software and hardware as I prepare for a career in software engineering.";
const shortBio = "David Litton is a Software Engineering student at the Milwaukee School of Engineering, graduating May 2026. Experienced in roles from embedded Linux to AWS cloud. Excited to expand into hardware as he assists his senior design team building a portable oscilloscope. Currently balancing work, school, and leadership roles as webmaster for the MSOE Society of Software Engineers and secretary of the bike club. Outside tech, he enjoys biking, snowboarding, video games, and is a mechanical keyboard fan with a favorite Korn 6-column board.";

export const Bio = ({ page = "home" }) => {
    
    return (
        <div className="bio-section">
            <h2 className="section-title">Bio</h2>
            {page === "about" ? (
                <p className="bio">{longBio}</p>
            ) : (
                <p className="bio">{shortBio}</p>
            )}
        </div>
    );
};