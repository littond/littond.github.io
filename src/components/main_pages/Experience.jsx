import { info } from "../../scripts/getInfo";
import '../../styles/Chip.css';
import '../../styles/Experience.css';

export const Experience = ({ showAll = false }) => {
    const { employment } = info;

    const filteredEmployment = showAll
        ? employment
        : employment.filter(job => job.end_date?.toLowerCase() === "present");

    const title = showAll
        ? "Experience:"
        : `Current Job${filteredEmployment.length !== 1 ? "s" : ""}:`;

    return (
        <div className="experience-container">
            <h1 className="experience-title">{title}</h1>
            {filteredEmployment.map(job => (
                <ExperienceCard key={job.company} {...job} />
            ))}
        </div>
    );
};

const ExperienceCard = ({ company, role, bio, tags }) => {
    return (
        <div className="experience-card">
            <p className="company">Company: {company}</p>
            <p className="role">Role: {role}</p>
            <p className="description">{bio}</p>
            <div className="tags-container">
                {tags.map(tag => <Chip key={tag}>{tag}</Chip>)}
            </div>
        </div>
    );
}

const Chip = ({ children }) => {
    return (
        <div className="chip">{children}</div>
    );
}
