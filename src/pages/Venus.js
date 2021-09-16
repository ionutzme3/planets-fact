import Planets from "../components/Planets";
import Statistics from "../components/Statistics";
import data from "../data.json";
const Venus = () => {
    return  (
        <>
        <Planets
            planetName={data[1].name}
            content={data[1].overview.content}
            structure={data[1].structure.content}
            surface={data[1].geology.content}
            planet={data[1].images.planet}
            internal={data[1].images.internal}
            geology={data[1].images.geology}
        />
        <Statistics 
            rotation={data[1].rotation}
            revolution={data[1].revolution}
            radius={data[1].radius}
            temperature={data[1].temperature}
        />
    </>
    );
}

export default Venus;