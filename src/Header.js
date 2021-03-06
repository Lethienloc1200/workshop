// rfce//
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function Header() {
  const[{basket,user}, dispatch] = useStateValue();

  const hanleAuthenticaton =()=>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
       <Link to={!user && '/login'}>
       <div onClick={hanleAuthenticaton} className="header__option">
          <span className="header__optionLineOne">Hello  {!user ? 'Guest' : user.email}</span>
          <span className="header__optionLineTwo">{user ? 'Đăng nhập' : 'Đăng xuất'}</span>
        </div>
       </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <Link to="/checkout">
            <AddShoppingCartIcon />
          </Link>

          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
