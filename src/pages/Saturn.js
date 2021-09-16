import Planets from "../components/Planets";
import Statistics from "../components/Statistics";
import data from "../data.json";

const Saturn = () => {
    return  (
        <>
        <Planets
            planetName={data[5].name}
            content={data[5].overview.content}
            structure={data[5].structure.content}
            surface={data[5].geology.content}
            planet={data[5].images.planet}
            internal={data[5].images.internal}
            geology={data[5].images.geology}
        />
        <Statistics 
            rotation={data[5].rotation}
            revolution={data[5].revolution}
            radius={data[5].radius}
            temperature={data[5].temperature}
        />
    </>
    );
}

export default Saturn;