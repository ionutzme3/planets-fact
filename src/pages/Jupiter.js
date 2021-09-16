import Planets from "../components/Planets";
import Statistics from "../components/Statistics";
import data from "../data.json";

const Jupiter = () => {
    return  (
        <>
        <Planets
            planetName={data[4].name}
            content={data[4].overview.content}
            structure={data[4].structure.content}
            surface={data[4].geology.content}
            planet={data[4].images.planet}
            internal={data[4].images.internal}
            geology={data[4].images.geology}
        />
        <Statistics 
            rotation={data[4].rotation}
            revolution={data[4].revolution}
            radius={data[4].radius}
            temperature={data[4].temperature}
        />
    </>
    );
}

export default Jupiter;