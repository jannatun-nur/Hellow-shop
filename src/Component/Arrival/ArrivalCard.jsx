const ArrivalCard = ({ arrivals }) => {
    const { name, price, button } = arrivals;

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center"
        , background: "white" }}>
            <h3 className="text-gray-800 font-semibold lg:text-xl py-2">{name}</h3>
            <p className="text-gray-800 font-semibold lg:text-xl py-2">${price}</p>
            <button>{button}</button>
        </div>
    );
};

export default ArrivalCard;
