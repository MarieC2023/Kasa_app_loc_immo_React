import Banner from "@/components/Banner/Banner";
import homeImage from "@/assets/homeBanner.jpg"
import "./home.css"


const Home = () => {
    return (
        <main className="home">
            <Banner title="Chez vous, partout et ailleurs" imageUrl={homeImage} imageTitle="Océan et falaise arboré "/>
          
            
        </main>
    );
};

export default Home;