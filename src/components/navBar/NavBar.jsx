import './NavBar.css'
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {Link} from 'react-router-dom'

const NavBar=()=>{
  return(
    <div className="navbar">
      <div className='navbar-logo'>
        <Logo/>
      </div>
      <div className='navbar-menu'>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/frontend"><li>FrontEnd</li></Link>
          <Link to="/graphic"><li>Grpahic</li></Link>
          <Link to="/about"><li>About me</li></Link>

        </ul>
      </div>
      <div className='navbar-login'>login</div>
    </div>
  )
}
export default NavBar