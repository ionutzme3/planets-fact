import Planets from "../components/Planets";
import Statistics from "../components/Statistics";
import data from "../data.json";

const Uranus = () => {
    
    return  (
        <>
        <Planets
            planetName={data[6].name}
            content={data[6].overview.content}
            structure={data[6].structure.content}
            surface={data[6].geology.content}
            planet={data[6].images.planet}
            internal={data[6].images.internal}
            geology={data[6].images.geology}
        />
        <Statistics 
            rotation={data[6].rotation}
            revolution={data[6].revolution}
            radius={data[6].radius}
            temperature={data[6].temperature}
        />
    </>
    );
}

export default Uranus;