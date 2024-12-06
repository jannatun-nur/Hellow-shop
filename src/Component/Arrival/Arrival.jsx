import { useEffect } from "react";
import { useState } from "react";
import ArrivalCard from "./ArrivalCard";


const Arrival = () => {

    const [arrival , setArrival] = useState([])

    useEffect( ()=>{
        fetch('arrival.json')
        .then( res => res.json())
        .then(data => setArrival(data))
    },[])
    return (
        <div>
           

           <div>
            {
                arrival.map( arrivals => <ArrivalCard key={arrivals} arrivals={arrivals}></ArrivalCard>)
            }
           </div>
        </div>
    );
};

export default Arrival;