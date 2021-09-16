import Planets from "../components/Planets";
import Statistics from "../components/Statistics";
import data from "../data.json";

const Mercury = () => {
    return  (
        <>
            <Planets
                planetName={data[0].name}
                content={data[0].overview.content}
                structure={data[0].structure.content}
                surface={data[0].geology.content}
                planet={data[0].images.planet}
                internal={data[0].images.internal}
                geology={data[0].images.geology}
            />
            <Statistics 
                rotation={data[0].rotation}
                revolution={data[0].revolution}
                radius={data[0].radius}
                temperature={data[0].temperature}
            />
        </>
    );
};

export default Mercury;
