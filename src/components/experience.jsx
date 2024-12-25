import { info } from "../scripts/getInfo";

export const Experience = () => {
    const { employment } = info;
    return (
        <div>
            <h1>Experience:</h1>
            {employment.map(job => ExperienceCard(job))}
        </div>
    );
}

const ExperienceCard = (props) => {
    return (
        <div>
            <p>Company: {props.company}</p>
            <p>Role: {props.role}</p>
            <p>Description: {props.bio}</p>
            <div>
                {props.tags.map(tag => Chip(tag))}
            </div>
        </div>
    );
}

const Chip = (props) => {
    return (
        <div className="chip">{JSON.stringify(props)}</div>
    );
}
