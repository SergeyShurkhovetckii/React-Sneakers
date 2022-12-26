import btnPlus from "../assets/img/btn.plus.svg";
import FavoritesBtn from "../assets/img/heart.svg";
import CardImg from "../assets/img/card_1.svg";

function Card() {
  return (
    <div className="card">
      <div className="card-favorite">
        <img src={FavoritesBtn} alt="кнопка" />
      </div>
      <img src={CardImg} alt="кросовки" />
      <h5 className="mt-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="justify-between d-flex mt-15">
        <div className="flex-column d-flex">
          <span className="opacity-5">Цена : </span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src={btnPlus} alt="btnPlus" />
        </button>
      </div>
    </div>
  );
}
export { Card };
