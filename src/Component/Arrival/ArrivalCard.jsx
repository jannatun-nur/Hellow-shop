const ArrivalCard = ({ arrivals }) => {
    const { name, price, button } = arrivals;

    return (
        <div style={{ border: "1px solid #3939a3", padding: "10px", textAlign: "center"
        , background: "white" }}>
            <h3 className="text-gray-800 font-semibold lg:text-xl py-2">{name}</h3>

            
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
            
            <p className="text-gray-800 font-semibold lg:text-xl py-4">${price}</p>
            <button className="bg-blue-950 text-white
            lg:px-5 lg:py-3 font-bold rounded-ee-xl">{button}</button>
        </div>
    );
};

export default ArrivalCard;
