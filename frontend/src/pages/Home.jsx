import Banner from "@/components/Home/Banner";
import homeImage from "@/assets/homeBanner.jpg"


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