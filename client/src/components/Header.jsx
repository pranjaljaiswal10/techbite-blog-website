import {Link, useLocation} from "react-router-dom"
import { HiOutlinePencilSquare } from "react-icons/hi2";
import {IoSearch} from "react-icons/io5"
import { useState } from "react";


const Header = () => {
  const [searchTxt,setSearchTxt]=useState("")
  const location=useLocation()

  return (
    <nav className={`${location.pathname==""?"hidden":""} flex p-4 px-8 justify-between items-center border-b-1 border-slate-200` }>
      <div className="logo flex items-center gap-12 relative">
       <Link to="/">
       <img src="/techbite.png" alt="" className="h-8 w-8" />
       </Link> 
        <input
          type="text"
          placeholder="Search..."
          className="w-56 rounded-md py-1 outline-gray-400 outline-1 "
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <IoSearch  className="absolute right-1"/>
      </div>
      <ul className="flex gap-3 cursor-pointer">
        <li>
          <Link to="/Home"></Link>
        </li>
        <li>Explore Blogs</li>
        <li>
          <Link to="/addPost">
          <HiOutlinePencilSquare className="inline" />
          write
          </Link>
        </li>
        <li>
          <Link to="/signup">signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header