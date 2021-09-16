import Planets from "../components/Planets";
import Statistics from "../components/Statistics";
import data from "../data.json";

const Mars = () => {
    return  (
        <>
        <Planets
            planetName={data[3].name}
            content={data[3].overview.content}
            structure={data[3].structure.content}
            surface={data[3].geology.content}
            planet={data[3].images.planet}
            internal={data[3].images.internal}
            geology={data[3].images.geology}
        />
        <Statistics 
            rotation={data[3].rotation}
            revolution={data[3].revolution}
            radius={data[3].radius}
            temperature={data[3].temperature}
        />
    </>
    );
}

export default Mars;