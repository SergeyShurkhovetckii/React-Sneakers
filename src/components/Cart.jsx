import btnRemove from "../assets/img/btn-remove.svg";
import arrow from "../assets/img/arrow.svg";
import Card from "../assets/img/card_1.svg";
function Cart() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="flex cart d-flex flex-column">
        <div className="justify-between mb-30 align-center d-flex">
          <h2>Корзина</h2>
          <img className="btn-remove" src={btnRemove} alt="" />
        </div>
        <div className="flex">
          {/* Карточки в корзине */}
          <div className="p-20 mb-20 cartItem d-flex align-center">
            <img className="mr-15" width={70} height={70} src={Card} alt="" />
            <div className="mr-5">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="btn-remove" src={btnRemove} alt="" />
          </div>
          <div className="p-20 mb-20 cartItem d-flex align-center">
            <img className="mr-15" width={70} height={70} src={Card} alt="" />
            <div className="mr-5">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="btn-remove" src={btnRemove} alt="" />
          </div>
        </div>
        <ul className="totalBlock">
          <li className="d-flex">
            <span>Итого</span>
            <div></div>
            <b>21 468 руб </b>
          </li>
          <li className="d-flex">
            <span>Налог 5%: </span>
            <div></div>
            <b>1074 руб. </b>
          </li>
          <button className="GreenBtn">
            Оформить заказ
            <img src={arrow} alt="arrow" />
          </button>
        </ul>
      </div>
    </div>
  );
}
export { Cart };
