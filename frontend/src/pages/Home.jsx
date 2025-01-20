import Banner from "@/components/Banner/Banner";
import homeImage from "@/assets/homeBanner.jpg"
import "./home.css"


const Home = () => {
    return (
        <main className="home">
            <section className="banner-content">
            <Banner title="Chez vous, partout et ailleurs" imageUrl={homeImage} imageTitle="Océan et falaise arboré "/>
            </section>
            <section className="card-content">
            
            </section>     
        </main>
    );
};

export default Home;