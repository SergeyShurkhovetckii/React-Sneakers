import { useState } from "react";
import btnHeart from "../assets/img/heart.svg";
import btnHeartActive from "../assets/img/heart-active.svg";
import Plus from "../assets/img/plus.svg";
import Done from "../assets/img/done.svg";

function Card(props) {
  const { title, price, imageUrl, onClickFavorite, onAddBasket } = props;
  const [Cheched, setCheched] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const clickPlus = () => {
    onAddBasket({ title, price, imageUrl });
    setCheched(!Cheched);
  };
  const clickFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <div className="card">
      {favorite ? (
        <button
          onClick={clickFavorite}
          className="btn btn__favorites btn__favorites--active"
        >
          <img src={btnHeartActive} alt="Избранное" />
        </button>
      ) : (
        <button onClick={clickFavorite} className="btn btn__favorites">
          <img src={btnHeart} alt="Избранное" />
        </button>
      )}
      <img src={imageUrl} alt="кросовки" />
      <h5 className="mt-15">{title}</h5>
      <div className="justify-between d-flex mt-15">
        <div className="flex-column d-flex">
          <span className="opacity-5">Цена : </span>
          <b>{price} руб.</b>
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
