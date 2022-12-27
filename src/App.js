import "./index.scss";
import React, { useState, useEffect } from "react";
import Search from "./assets/img/search.svg";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";

function App() {
  const [items, setItems] = useState([]);
  const [cartOpned, setCartOpned] = useState(false);
  useEffect(() => {
    fetch("https://63aa970a7d7edb3ae62b8930.mockapi.io/items")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

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
          {items.map((item) => {
            return (
              <Card
                key={item.title}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onClickFavorite={() => {
                  console.log("favorite");
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
