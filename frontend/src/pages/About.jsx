import Banner from "@/components/Banner/Banner";
import aboutImage from "@/assets/aboutBanner.jpg"
import CollapseSection from "../components/Collapse/CollapseSection";




const About = () => {
    return (
        <main>
            <Banner imageUrl={aboutImage} imageTitle="Rivière traversant les montages " />
            <CollapseSection/>
        </main>
    );
};

export default About;

