import { useEffect, useState } from "react";
import DeviceCard from "./DeviceCard";


const Device = () => {
    const [device, setDevice] = useState([])

    useEffect(()=>{
        fetch('shirt.json')
        .then(res => res.json())
        .then(data => setDevice(data))
    },[])
    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 mx-4">
                {
                    device.map( devices=> <DeviceCard key={devices} devices={devices}></DeviceCard>)
                }
            </div>
        </div>
    );
};

export default Device;