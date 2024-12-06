import { Link } from "react-router";
import './banner.css'

const Banner = () => {
    return (
        <div>
           <div className="landing-page">
        <div className="flex">
          <div className="image-container left">
            <p className="headline text-xl md:text-3xl lg:text-6xl font-serif text-white font-bold py-8">
              WHAT&apos;S THE PLAN FOR THIS WEEKEND !?
            </p>
            <p className="subheadline text-xl md:text-2xl lg:text-2xl font-serif text-white py-1 lg:py-8 ">
              Let&apos;s go for a trip with your inner happiness.....!!!!
            </p>
            <Link to="/addguestform">
              <button className="discover-btn bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 px-5 py-2 rounded-2xl text-white font-serif text-lg md:text-xl">
               DISCOVER MORE
              </button>
            </Link>
          </div>

          <div className="image-container right">
            <p className="headline text-xl md:text-3xl lg:text-6xl font-serif text-white font-bold py-8">
              HAVE YOU EVER TRIED OUR SERVICES ...!?
            </p>
            <p className="subheadline text-lg md:text-2xl lg:text-2xl font-serif text-white  py-1 lg:py-8">
              Why not try right now for making a safe & happy journey ....!!!
            </p>
            <Link to="/addguestform">
              <button className="discover-btn bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 px-5 py-2 rounded-2xl text-white font-serif text-lg md:text-xl">
                DISCOVER MORE
              </button>
            </Link>
          </div>
        </div>
      </div>  
        </div>
    );
};

export default Banner;