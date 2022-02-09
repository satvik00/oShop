import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider";

function Header(){

    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: "none" }} >
                <div className="header_logo">
                    <StorefrontIcon className="header_logoImage" fontSize="large"/>
                    <h2 className="header_logoTitle">oShop</h2>
                </div>
            </Link>
            

            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
              <Link to="/login" style={{textdecoration: "none"}} >
                <div className="nav_item">
                <span  className="nav_itemLineOne">Hi Guest</span>
                <span  className="nav_itemLineTwo">Sign In</span>
                </div>
              </Link>
                

                <div className="nav_item">
                <span  className="nav_itemLineOne">Your</span>
                <span  className="nav_itemLineTwo">Shop</span>
                </div>

                <Link to="checkout" style={{ textDecoration: "none" }}>
                    <div className="nav_itemBasket">
                    <ShoppingBasketIcon />
                    <span  className="nav_itemLineTwo nav_basketCount">{basket.length}</span>       
                    </div>
                </Link>
               

            </div>
        </div>
    )
}

export default Header