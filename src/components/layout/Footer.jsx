import "../../styles/layout/Footer.css";
import ghLogo from '/github-mark.svg'
import lnLogo from '/LI-In-Bug.png'

export const Footer = () => {
    const media = [
        {
            name: "Github",
            site: "https://github.com/littond",
            icon: ghLogo,
        },
        {
            name: "LinkedIn",
            site: "https://www.linkedin.com/in/david-litton/",
            icon: lnLogo,
        }
    ];
    return (
        <div className="social-media-footer">
            {media.map((platform) => (
                <a key={platform.name} href={platform.site} target="_blank" rel="noopener noreferrer" className="social-link">
                    <img
                        src={platform.icon}
                        alt={platform.name}
                        className="social-icon"
                    />
                    <span className="tooltip">{platform.name}</span>
                </a>
            ))}
        </div>
    );
}