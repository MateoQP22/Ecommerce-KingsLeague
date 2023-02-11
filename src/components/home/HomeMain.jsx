import HomeMen from "./HomeCategory/HomeMen";
import HomeWoman from "./HomeCategory/HomeWoman";


const HomeMain = () => {
    return (
        <>
                <section className='categorias'>
                    <HomeMen/>
                    <HomeWoman/>
                </section>
        </>
    )
};
export default HomeMain;