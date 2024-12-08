
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeartCirclePlus } from "react-icons/fa6";


const ShirtCard = ({shirts}) => {
   const {name , price, button} =shirts
    return (
        <div>
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

            <div>
                <button className="text-blue-700 text-4xl mr-5"><MdOutlineShoppingCart /></button>
                <button className="text-pink-600 text-4xl mb-5"><FaHeartCirclePlus /></button>
            </div>
            <button className="bg-blue-950 text-white
            px-5 py-3 font-bold rounded-ee-xl">{button}</button>
        </div>
        </div>
    );
};

export default ShirtCard;