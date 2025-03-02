import { info } from "../scripts/getInfo";
import "../styles/About.css";

export const About = () => {
    return (
        <div className="about-container">
            <Introduction />
            <Bio />
        </div>
    );
}

const Introduction = () => {
    const { me } = info;
    return (
        <p className="introduction">Hello! My name is {me.name}, welcome to my site!</p>
    );
}

const Bio = () => {
    const { me, employment } = info;
    return (
        <p className="bio">I am in my {me.year} year at {me.school}, studying {me.major}. I am currently taking the following classes: {me.class_list}. Alongside being a student, I have also been working for {employment[0].company} since {employment[0].start_date} as a {employment[0].role}.</p>
    );
}
