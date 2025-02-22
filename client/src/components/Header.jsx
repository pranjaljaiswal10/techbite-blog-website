import {Link} from "react-router-dom"

const Header = () => {
  return (
    <nav>
     <div className="logo">
        <img src="/techbite.png" alt="" />
     </div>
     <ul>
        <li><input type="text" placeholder="Search..."/></li>
        <li><Link to="/Home"></Link></li>
        <li>Explore Blogs</li>
        <li>Post blog</li>
        <li>logout</li>
     </ul>
    </nav>
  )
}

export default Header