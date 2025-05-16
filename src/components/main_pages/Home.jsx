import { Experience } from "../sub_pages/Experience";
import { SiteTitleBanner } from "../sub_pages/SiteTitleBanner";
import { Bio } from "../sub_pages/Bio";
import "../../styles/main_pages/Home.css";

export const Home = () => {
    return (
        <div className="home-container">
            <SiteTitleBanner />
            <Bio page="home"/>
            <Experience limit={1} />
        </div>
    );
}