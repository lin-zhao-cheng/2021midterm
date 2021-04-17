import { Link } from 'react-router-dom';
import nlogo from "../images/logo.png";
import nmember from "../images/nav-member.png";
import nbag from "../images/nav-shopbag.png";
import nstore from "../images/nav-store.png";
import nsearch from "../images/nav-search.png";
export default function NavBar() {
    return (
        <div className="nav-bar hideUp">
            
        <div className="navbar-l">
            <Link to='/'>
                <img src ={nlogo} alt="nav-logo" className="navbar-logo"></img>
            </Link>
            <div className="navbar-search">
                <div className="navsearch-text">Search Creeper Store</div>
                <img src ={nsearch} alt="nsearch" className="navbar-searchicon"></img>
            </div>
        </div>

            <div className="navbar-r"><img src ={nstore} alt="nstore" className="navbar-icon"></img>
            <Link to='/Login'><img src ={nmember} alt="nmember" className="navbar-icon"></img></Link>
            <img src ={nbag} alt="nbag" className="navbar-icon"></img></div>

            {/* <Search placeholder="Search Creeper Store" allowClear  onSearch={onSearch} className="navbar-search " /> */}
            
            {/* <NavLink to="/tableware" className="nav-item" activeClassName="nav-item--active">
                Tableware
            </NavLink>
            <NavLink to="/cookware" className="nav-item" activeClassName="nav-item--active">
                Cookware
            </NavLink>
            <NavLink to="/home-accessories" className="nav-item" activeClassName="nav-item--active">
                Home accessories
            </NavLink>
            <NavLink to="/lighting" className="nav-item" activeClassName="nav-item--active">
                Lighting
            </NavLink>
            <NavLink to="/textile" className="nav-item" activeClassName="nav-item--active">
                Textile
            </NavLink>
            <NavLink to="/furniture" className="nav-item" activeClassName="nav-item--active">
                Furniture
            </NavLink> */}
        </div>
    );
}
