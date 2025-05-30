import "../../styles/layout/Footer.css";
import "../../styles/utils/site_color.css";
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
        <div className="social-media-footer primary-bg">
            {media.map((platform) => (
                <a key={platform.name} href={platform.site} target="_blank" rel="noopener noreferrer" className="social-link">
                    <img
                        src={platform.icon}
                        alt={platform.name}
                        className="social-icon"
                    />
                </a>
            ))}
        </div>
    );
}