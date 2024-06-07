import  { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const Navbar = ({setShowLogin}) => {
  const [btn,setbtn] = useState("home");
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  }
  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link  to='/' onClick={()=>setbtn("home")}  className={btn==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setbtn("menu")} className={btn==="menu"?"active":""}>menu</a>
        <a href='#app-dowload' onClick={()=>setbtn("mobile-app")} className={btn==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setbtn("contact-us")} className={btn==="contact-us"?"active":""}>contact-us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()==0?"":"dot"}></div>
        </div>
        {
        !token?<button onClick={()=>setShowLogin(()=>true)}>sign in</button>:
        <div className="navbar-profile">
          <img src={assets.profile_icon} alt="" />
          <ul className="navbar-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li> <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
        </div>
        }
      </div>
    </div>

  )
}

export default Navbar