import { useState } from "react";
import FavoritesBtn from "../assets/img/heart.svg";
import CardImg from "../assets/img/card_1.svg";
import Plus from "../assets/img/plus.svg";
import Done from "../assets/img/done.svg";

function Card() {
  const [Cheched, setCheched] = useState(false);
  const clickPlus = () => {
    setCheched(!Cheched);
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
        {Cheched ? (
          <button onClick={clickPlus} className="btn btnCheck">
            <img src={Done} alt=" " />
          </button>
        ) : (
          <button onClick={clickPlus} className=" btn btnAdd">
            <img src={Plus} alt="Плюс" />
          </button>
        )}
      </div>
    </div>
  );
}
export { Card };
