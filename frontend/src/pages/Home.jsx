import Banner from "@/components/Home/Banner";
import homeImage from "@/assets/homeBanner.jpg"


const Home = () => {
    return (
        <div className="home">
            <Banner title="Chez vous, partout et ailleurs" imageUrl={homeImage} imageTitle="Océan et falaise arboré "/>
                        
        </div>
    );
};

export default Home;