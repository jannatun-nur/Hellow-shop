import { useEffect, useState } from "react";
import ShirtCard from "./ShirtCard";


const Shirt = () => {

    const [shirt, setShirt] = useState([])

    useEffect(()=>{
        fetch('shirt.json')
        .then(res => res.json())
        .then(data => setShirt(data))
    },[])
    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 mx-4">
                {
                    shirt.map( shirts=> <ShirtCard key={shirts} shirts={shirts}></ShirtCard>)
                }
            </div>
        </div>
    );
};

export default Shirt;