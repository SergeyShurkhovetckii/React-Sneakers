import { useState } from "react";
import btnPlus from "../assets/img/btn.plus.svg";
import btnChechek from "../assets/img/btn-active.svg";
import FavoritesBtn from "../assets/img/heart.svg";
import CardImg from "../assets/img/card_1.svg";

function Card() {
  const [Cheched, setCheched] = useState(false);
  const clickPlus = () => {
    setCheched(true);
    console.log("Card");
  };
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
        <button>
          <img
            className="button"
            width={11}
            height={11}
            // src={btnPlus}
            src={Cheched ? btnChechek : btnPlus}
            alt="btnPlus"
            onClick={clickPlus}
          />
        </button>
      </div>
    </div>
  );
}
export { Card };
