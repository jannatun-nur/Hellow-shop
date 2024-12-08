import { useEffect, useState } from "react";
import ShoeCard from "./ShoeCard";


const Shoe = () => {
    const [shoe , setShoe] = useState([])

    useEffect(()=>{
        fetch('shirt.json')
        .then(res => res.json())
        .then(data => setShoe(data))
    },[])
    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 mx-4">
                {
                   shoe.map( shoes=> <ShoeCard key={shoes} shoes={shoes}></ShoeCard>)
                }
            </div>
        </div>
    );
};

export default Shoe;