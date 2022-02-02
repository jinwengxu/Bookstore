import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return(
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-dark">                 
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" height="55" />
        </Link>           
        <div className="collapse navbar-collapse">  
          <div className="navbar-nav">          
            <Link className="nav-link" to="/">Home</Link>              
            <Link className="nav-link" to="/Shop">Shop</Link>           
            <Link className="nav-link" to="/Contact">Contact</Link>                
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;