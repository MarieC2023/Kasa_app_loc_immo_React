import Banner from "@/components/Banner/Banner";
import homeImage from "@/assets/homeBanner.jpg"
import "./home.css"
import Gallery from "@/components/Gallery/Gallery";


const Home = () => {
    return (
        <main className="home">
            <Banner title="Chez vous, partout et ailleurs" imageUrl={homeImage} imageTitle="Océan et falaise arboré "/>
            <div className="card-content">
                <Gallery/>
            </div>
            
        </main>
    );
};

export default Home;