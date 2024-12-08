import { useEffect, useState } from "react";
import WatchCard from "./WatchCard";


const Watch = () => {
    const [watch ,setWatch] = useState([])

    useEffect(()=>{
        fetch('shirt.json')
        .then(res => res.json())
        .then(data => setWatch(data))
    },[])
    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 mx-4">
                {
                   watch.map( watchs=> <WatchCard key={watchs} watchs={watchs}></WatchCard>)
                }
            </div>
        </div>
    );
};

export default Watch;