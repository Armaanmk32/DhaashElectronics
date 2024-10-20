import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import NewsLeter from "../Components/NewsLater";
import OurPolicy from "../Components/OurPolicy";

function Home(){
    return <div>
        <Hero/>
        <LatestCollection />
        <OurPolicy />
        <NewsLeter />
    </div>
}
export default Home