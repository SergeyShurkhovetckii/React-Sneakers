import arrow from "../assets/img/arrow.svg";
import Remove from "../assets/img/remove.svg";
function Cart(props) {
  const { items = [], onClose, onRemove } = props;
  return (
    <div className="overlay">
      <div className="flex cart d-flex flex-column">
        <div className="justify-between mb-30 align-center d-flex">
          <h2>Корзина</h2>
          <div onClick={onClose} className="btn btn-remove">
            <img src={Remove} alt="Close" />
          </div>
        </div>
        {items.length > 0 ? (
          <div className="flex cart-list">
            {/* Карточки в корзине */}
            {items.map((obj) => (
              <div className="p-20 mb-20 cartItem d-flex align-center">
                <img
                  className="mr-15"
                  width={70}
                  height={70}
                  src={obj.imageUrl}
                  alt=""
                />
                <div className="mr-5">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price}руб.</b>
                </div>
                {/* Кнопка удалить  */}
                <button
                  onClick={() => onRemove(obj.id)}
                  className="btn btn-remove"
                >
                  <img src={Remove} alt="Удалить" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>Корзина пуста </div>
        )}

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
