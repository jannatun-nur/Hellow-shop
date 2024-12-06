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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="text-xl text-blue-900 font-bold">HellowSHOP</a>
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
        <div className="navbar-end">
          
        
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
