import {Link} from "react-router-dom"

const Header = () => {
  return (
    <nav>
     <div className="logo">
        <img src="./public/techbite.png" alt="" />
     </div>
     <ul>
        <li><input type="text" /></li>
        <li><Link to="/Home"></Link></li>
        <li>Add post</li>
        <li>logout</li>
     </ul>
    </nav>
  )
}

export default Header