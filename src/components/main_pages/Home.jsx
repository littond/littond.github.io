import { Experience } from "../sub_pages/Experience";
import { SiteTitleBanner } from "../sub_pages/SiteTitleBanner";
import { Bio } from "../sub_pages/Bio";
import { LatestContent } from "../content/LatestContent";
import "../../styles/main_pages/Home.css";

export const Home = () => {
    return (
        <div className="home-container">
            <Bio page="home"/>
            <Experience limit={1} />
            <LatestContent contentType="projects" />
            <LatestContent contentType="blog" />
        </div>
    );
}