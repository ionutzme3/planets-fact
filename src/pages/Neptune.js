import Planets from "../components/Planets";
import Statistics from "../components/Statistics";
import data from "../data.json";

const Neptune = () => {
    return  (
        <>
        <Planets
            planetName={data[7].name}
            content={data[7].overview.content}
            structure={data[7].structure.content}
            surface={data[7].geology.content}
            planet={data[7].images.planet}
            internal={data[7].images.internal}
            geology={data[7].images.geology}
        />
        <Statistics 
            rotation={data[7].rotation}
            revolution={data[7].revolution}
            radius={data[7].radius}
            temperature={data[7].temperature}
        />
    </>
    );
}

export default Neptune;