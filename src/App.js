import "./index.scss";
import React, { useState, useEffect } from "react";
import Search from "./assets/img/search.svg";
import Remove from "./assets/img/remove.svg";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";

function App() {
  const [items, setItems] = useState([]);
  const [cardItems, setCardItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
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

  const adToCart = (obj) => {
    // setCardItems([...cardItems, obj]);
    setCardItems((prev) => [...prev, obj]);
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {/* Корзина */}
      {cartOpned && (
        <Cart items={cardItems} onClose={() => setCartOpned(false)} />
      )}
      {/* Header */}
      <Header onClickCart={() => setCartOpned(true)} />
      <div className="p-40 content">
        <div className="justify-between mb-40 d-flex align-center ">
          <h1 className="fw-bold">
            {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кросовки"}
          </h1>
          {/* Поиск */}
          <div className="search-block">
            <img src={Search} alt="search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              className="search"
              placeholder="Поиск..."
              type="text"
            />
            {searchValue && (
              <button
                onClick={() => setSearchValue("")}
                className="btn btn-remove"
              >
                <img src={Remove} alt="Удалить" />
              </button>
            )}
          </div>
        </div>
        <div className="flex-wrap justify-between sneakers d-flex">
          {/* карточки товаров  */}
          {items.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onClickFavorite={() => {
                  console.log("favorite");
                }}
                onAddBasket={(obj) => {
                  adToCart(obj);
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
