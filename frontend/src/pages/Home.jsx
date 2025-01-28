import Banner from "@/components/Banner/Banner";
import homeImage from "@/assets/homeBanner.jpg"
import Gallery from "@/components/Gallery/Gallery";


const Home = () => {
    return (
        <main className="home">
            <Banner
                title={
                    <p>
                        Chez vous, <span className="second-line">partout et ailleurs</span>
                    </p>
                }
                imageUrl={homeImage}
                imageTitle="Océan et falaise arborée"
            />
            <Gallery />
        </main>
    );
};

export default Home;