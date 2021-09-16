import Planets from "../components/Planets";
import Statistics from "../components/Statistics";
import data from "../data.json";

const Earth = () => {
    return  (
        <>
        <Planets
            planetName={data[2].name}
            content={data[2].overview.content}
            structure={data[2].structure.content}
            surface={data[2].geology.content}
            planet={data[2].images.planet}
            internal={data[2].images.internal}
            geology={data[2].images.geology}
        />
        <Statistics 
            rotation={data[2].rotation}
            revolution={data[2].revolution}
            radius={data[2].radius}
            temperature={data[2].temperature}
        />
    </>
    );
}

export default Earth;