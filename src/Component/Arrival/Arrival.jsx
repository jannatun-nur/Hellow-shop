import { useEffect, useState } from "react";
import ArrivalCard from "./ArrivalCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Arrival = () => {
    const [arrival, setArrival] = useState([]);

    useEffect(() => {
        fetch("arrival.json")
            .then((res) => res.json())
            .then((data) => setArrival(data));
    }, []);

    const handleDragStart = (e) => e.preventDefault();

    const items = arrival.map((arrivals) => (
        <div key={arrivals.name} onDragStart={handleDragStart}>
            <ArrivalCard arrivals={arrivals} />
        </div>
    ));

    return (
        <div>
            <h2>New Arrivals</h2>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={{
                    0: { items: 1 },
                    568: { items: 2 },
                    1024: { items: 3 },
                }}
                controlsStrategy="responsive"
                autoPlay
                autoPlayInterval={2000}
                infinite
                disableDotsControls
            />
        </div>
    );
};

export default Arrival;
