import { info } from "../../scripts/getInfo";
import "../../styles/About.css";
import '../../styles/Chip.css';

export const About = () => {
    return (
        <div className="about-container">
            <Introduction />
            <Bio />
            <Employment />
        </div>
    );
}

const Employment = () => {
    const { employment } = info;
    return (
        <div className="employment-section">
            <h2 className="section-title">Employment History</h2>
            <div className="employment-timeline">
                {employment.map((job, index) => (
                    <div key={index} className="job-card">
                        <div className="job-header">
                            <h3 className="company-name">{job.company}</h3>
                            <p className="job-duration">{job.start_date} - {job.end_date}</p>
                        </div>
                        <p className="job-title">{job.role}</p>
                        <p className="job-description">{job.bio}</p>
                        <div className="job-tags">
                            {job.tags.map((tag, tagIndex) => (
                                <div key={tagIndex} className="chip">{tag}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
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
        <p className="bio">I am in my {me.year} year at {me.school}, studying {me.major}. I am currently taking the following classes: {me.class_list.join(", ")}. Alongside being a student, I have also been working for {employment[0].company} since {employment[0].start_date} as a {employment[0].role}.</p>
    );
}