import{ FaLongArrowAltRight } from "react-icons/fa"
export const Herosection =()=>{
    return(
    <main className="hero-section main"style={{ marginTop: "10rem" }}>
        
            <div className=" container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the world, One country at a time.
                    </h1>
                    <p className="paragraph">
                        Discover the history,culture,and beayty of every nation. Sort,
                        search, and filter through countries to find the details you want. 
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring<FaLongArrowAltRight/>
                    </button>
                </div>
                <div className="hero-image">
                    <img src="/images/world.jpg" alt="world beauty" className="banner-image" />
                </div>

            </div>

        </main>
    )

}