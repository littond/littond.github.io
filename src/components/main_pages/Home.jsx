import { Experience } from "../sub_pages/Experience";
import { HomeHeroSection } from "../sub_pages/HomeHeroSection";
import { Bio } from "../sub_pages/Bio";
import "../../styles/main_pages/Home.css";

export const Home = () => {
    return (
        <div className="home-container">
            <HomeHeroSection />
            <Bio page="home"/>
            <Experience limit={1} />
        </div>
    );
}