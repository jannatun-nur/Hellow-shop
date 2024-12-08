import { useEffect, useState } from "react";
import LadisCard from "./LadisCard";


const Ladis = () => {
    const [ladis ,setLadis] = useState([])

    useEffect(()=>{
        fetch('shirt.json')
        .then(res => res.json())
        .then(data => setLadis(data))
    },[])
    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 mx-4">
                {
                    ladis.map( shirts=> <LadisCard key={shirts} shirts={shirts}></LadisCard>)
                }
            </div>
        </div>
    );
};

export default Ladis;