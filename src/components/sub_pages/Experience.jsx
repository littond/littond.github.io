import { info } from "../../scripts/getInfo";

export const Experience = ({ limit }) => {
    const { employment } = info;
    
    // If limit is defined and a valid number, limit the number of jobs displayed
    const jobsToDisplay = limit && !isNaN(limit) && limit > 0
        ? employment.slice(0, limit)
        : employment;

    return (
        <div className="employment-section">
            <h2 className="section-title">{limit === 1 ? 'Current Job' : 'Experience'}</h2>
            <div className="employment-timeline">
                {jobsToDisplay.map((job, index) => (
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
            {limit && !isNaN(limit) && limit > 0 && limit < employment.length && (
                <div className="show-more-container">
                    <p className="jobs-count">Showing {limit} of {employment.length} jobs</p>
                </div>
            )}
        </div>
    );
};