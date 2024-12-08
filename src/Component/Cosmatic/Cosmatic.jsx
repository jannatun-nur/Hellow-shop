import { useEffect, useState } from "react";
import CosCard from "./CosCard";


const Cosmatic = () => {
    const [cosmo, setCosmo] = useState([])

    useEffect(()=>{
        fetch('shirt.json')
        .then(res => res.json())
        .then(data => setCosmo(data))
    },[])
    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 mx-4">
                {
                    cosmo.map( cosmos=> <CosCard key={cosmos} cosmos={cosmos}></CosCard>)
                }
            </div>
        </div>
    );
};

export default Cosmatic;