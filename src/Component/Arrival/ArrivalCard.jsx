const ArrivalCard = ({ arrivals }) => {
    const { name, price, button } = arrivals;

    return (
        <div style={{ boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.7)", padding: "10px", textAlign: "center"
        , background: "white" }}>
            <h3 className="text-gray-800 font-semibold text-xl py-2">{name}</h3>

            
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-3xl ${
                    index < 4 ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            
            <p className="text-gray-800 font-semibold text-xl py-4">${price}</p>
            <button className="bg-blue-950 text-white
            px-5 py-3 font-bold rounded-ee-xl">{button}</button>
        </div>
    );
};

export default ArrivalCard;
