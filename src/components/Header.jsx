import logo from "../assets/img/logo.svg";
import Cart from "../assets/img/cart.svg";
import User from "../assets/img/user.svg";
import Favorites from "../assets/img/favorite.svg";
import BurgerMenu from "../assets/img/mobMenuBurger.svg";
import { Link, Routes } from "react-router-dom";

function Header(props) {
  const { cardItems, onClickCart } = props;
  return (
    <header className="justify-between  d-flex align-center">
      <Link to="/">
        <div className="d-flex align-center flex-column">
          <img className="logo" width={150} src={logo} alt="logo" />
          <div className="mt-5 header-left">
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex align-center header-control">
        <li onClick={onClickCart} className="cu-p d-flex">
          <img src={Cart} alt="cart" />
          <div className="label d-flex align-center justify-center">
            {cardItems.length}
          </div>
        </li>
        <Link to="/favorites">
          <li>
            <img src={Favorites} alt="favorites" />
          </li>
        </Link>
        <li>
          <img src={User} alt="user" />
        </li>
      </ul>
      <div className="mob-menu">
        <img src={BurgerMenu} alt="Mеню" />
      </div>
    </header>
  );
}
export { Header };
