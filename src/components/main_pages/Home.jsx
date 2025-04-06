import { About } from "./About";
import { Experience } from "./Experience";

export const Home = () => {
    return (
        <div>
            <div>Home Page</div>
            <About />
            <Experience showAll={false} />
        </div>
    );
}