import logo from "../assets/img/logo.svg";
import Cart from "../assets/img/cart.svg";
import User from "../assets/img/user.svg";
import Favorites from "../assets/img/favorite.svg";
import BurgerMenu from "../assets/img/mobMenuBurger.svg";

function Header(props) {
  const { onClickCart } = props;
  return (
    <header className="justify-between  d-flex align-center">
      <div className="d-flex align-center">
        <img src={logo} alt="logo" />
        <div className="ml-15 header-left">
          <h3 className="text-uppercase fw-bold">REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center header-control">
        <li onClick={onClickCart} className="cu-p">
          <img src={Cart} alt="cart" />
          <span className="ml-10">1205 руб.</span>
        </li>
        <li>
          <img src={Favorites} alt="favorites" />
        </li>
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
