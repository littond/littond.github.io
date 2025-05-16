import { Bio } from "../sub_pages/Bio";
import { Experience } from "../sub_pages/Experience";
import "../../styles/main_pages/About.css";
import "../../styles/utils/Chip.css";

export const About = () => {
    return (
        <div className="about-container">
            <Bio page="about"/>
            <Experience />
        </div>
    );
}
