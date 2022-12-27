import "./index.scss";
import { useState } from "react";
import Search from "./assets/img/search.svg";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";

function App() {
  const [items, setItems] = useState([]);
  const [cartOpned, setCartOpned] = useState(false);

  const arr = [
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      imageUrl: "/build/img/plus.svg",
    },
  ];

  return (
    <div className="wrapper clear">
      {/* Корзина */}
      {cartOpned && <Cart onClose={() => setCartOpned(false)} />}
      {/* Header */}
      <Header onClickCart={() => setCartOpned(true)} />
      <div className="p-40 content">
        <div className="justify-between mb-40 d-flex align-center ">
          <h1 className="fw-bold">Все кроссовки</h1>
          {/* Поиск */}
          <div className="search-block">
            <img src={Search} alt="search" />
            <input className="search" placeholder="Поиск..." type="text" />
          </div>
        </div>
        <div className="flex-wrap justify-between sneakers d-flex">
          {/* карточки товаров  */}
          {/* {arr.map((item) => {
            return (
              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <img src={item.imageUrl} />
              </div>
            );
          })} */}
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
