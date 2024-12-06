const ArrivalCard = ({ arrivals }) => {
    const { name, price, button } = arrivals;

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button>{button}</button>
        </div>
    );
};

export default ArrivalCard;
