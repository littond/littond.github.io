import { info } from "../../scripts/getInfo";
import '../../styles/Chip.css';
import '../../styles/Experience.css';

export const Experience = () => {
    const { employment } = info;
    return (
        <div className="experience-container">
            <h1 className="experience-title">Experience:</h1>
            {employment.map(job => <ExperienceCard key={job.company} {...job} />)}
        </div>
    );
}

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
