import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeartCirclePlus } from "react-icons/fa6";


const Navbar = () => {



  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-25 bg-base-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blue-950 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             <li>
              <div className="">
                <input
                  type="text"
                  placeholder="Search your need"
                  className="input input-bordered bg-white border-blue-900 border-2 text-gray-800
                  w-44"
                />
                
              </div>
            </li>
         
          <li>
            <button className="text-white text-3xl"><MdOutlineShoppingCart /></button>
            </li>
            <li>
             <p className="text-white text-3xl"><FaHeartCirclePlus /></p>
            </li>
         
          
            </ul>
          </div>
          <a className="lg:text-xl md:text-xl text-xs  text-blue-900 font-bold">HellowSHOP</a>
        </div>



        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <div className="">
                <input
                  type="text"
                  placeholder="Search your need"
                  className="input input-bordered bg-white border-blue-900 border-2 text-gray-800"
                />
                
              </div>
            </li>
            <li>
            <p className="text-white text-3xl"><MdOutlineShoppingCart /></p>
            </li>
            <li>
             <p className="text-white text-3xl"><FaHeartCirclePlus /></p>
            </li>
            <li>
            <p className="text-white text-3xl"> <CgProfile /></p>
            </li>
          </ul>
        </div>
        <div className="navbar-end block lg:hidden ">
        <li>
            <p className="text-3xl ml-28 text-blue-950 "> <CgProfile /></p>
            </li>
        
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
