// import styles from './header.module.css';
import { Link } from "react-router-dom";
import "../style.css";
import useShop from "../ShopContext";
const Header = () => {
  const {products} =  useShop();
    // secound way to style in react js 
    // const menuStyle = {
    //     backgroundColor: 'red',
    //     padding: 20,
    //     borderRadius: 20
    // }
    //menuStyle
    //{ 
        //way one of styling inline 
          //backgroundColor: 'red',
          //padding: 20,
         // borderRadius: 20
      //}
  //}
  return (
    <div className="menu"> 
     <Link to="/" className="logo">Reactify</Link>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contect">Contect</Link>
      <Link to="/cart">Cart</Link>
    </div>
    <Link to="/cart"><span className="cart">{products.length}</span></Link>

      {/* <a href="">Logo</a>
      <ul className="menu-items">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contect">Contect</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
      </ul>
      <a href="">{cart}</a> */}
    </div>
  );
};

export default Header;
