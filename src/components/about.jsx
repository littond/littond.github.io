import { info } from "../scripts/getInfo";
export const About = () => {
    return (
        <div>
            <h1>About:</h1>
            <Introduction />
            <Bio />
        </div>
    );
}

const Introduction = () => {
    const { me } = info;
    return (
        <p>Hello! My name is {me.name} welcome to my site!</p>
    );
}

const Bio = () => {
    const { me, employment } = info;
    return (
        <p>I am in my {me.year} year at the {me.school} studying {me.major}. I am currently taking the following classes: {me.class_list}. Along side being a student I have also working for {employment[0].company} since {employment[0].start_date} as a {employment[0].role}.</p>
    );
}