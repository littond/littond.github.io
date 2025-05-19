import { info } from "../../scripts/getInfo";
import { Chip } from "../utils/Chip";
import { SectionTitle } from "../utils/Section_Title";
import '../../styles/sub_pages/Experience.css';
import '../../styles/utils/site_color.css';

export const Experience = ({ limit }) => {
    const { employment } = info;
    
    // If limit is defined and a valid number, limit the number of jobs displayed
    const jobsToDisplay = limit && !isNaN(limit) && limit > 0
        ? employment.slice(0, limit)
        : employment;

    return (
        <div className="employment-section">
            <SectionTitle>{limit === 1 ? 'Current Job' : 'Experience'}</SectionTitle>
            <div className="employment-timeline">
                {jobsToDisplay.map((job, index) => (
                    <div key={index} className="job-card primary-bg">
                        <div className="job-header">
                            <h3 className="company-name secondary-text">{job.company}</h3>
                            <p className="job-duration tertiary-text">{job.start_date} - {job.end_date}</p>
                        </div>
                        <p className="job-title secondary-text">{job.role}</p>
                        
                        <ul className="job-bio-list tertiary-text">
                            {job.bio.map((item, bioIndex) => (
                                <li key={bioIndex}>{item}</li>
                            ))}
                        </ul>
                        
                        <div className="job-tags">
                            {job.tags.map((tag, tagIndex) => (
                                <Chip 
                                    key={tagIndex} 
                                    size="small"
                                >
                                    {tag}
                                </Chip>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};