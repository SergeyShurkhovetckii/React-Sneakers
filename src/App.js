import "./index.scss";
import React, { useState, useEffect } from "react";
import Search from "./assets/img/search.svg";
import Remove from "./assets/img/remove.svg";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [cardItems, setCardItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpned, setCartOpned] = useState(false);
  useEffect(() => {
    // Получение данных с backend
    axios
      .get("https://63aa970a7d7edb3ae62b8930.mockapi.io/items")
      .then((response) => {
        setItems(response.data);
      });
    // Получение данных  корзины  с backend
    axios
      .get("https://63aa970a7d7edb3ae62b8930.mockapi.io/cart")
      .then((response) => {
        setCardItems(response.data);
      });
  }, []);

  const adToCart = (obj) => {
    // Добавление данных в backend
    axios.post("https://63aa970a7d7edb3ae62b8930.mockapi.io/cart", obj);
    setCardItems((prev) => [...prev, obj]);
  };
  const onRemoveItem = (id) => {
    // Удаление товаров
    console.log(id);
    axios.delete(`https://63aa970a7d7edb3ae62b8930.mockapi.io/cart${id}`);
    setCardItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {/* Корзина */}
      {cartOpned && (
        <Cart
          items={cardItems}
          onClose={() => setCartOpned(false)}
          onRemove={onRemoveItem}
        />
      )}
      {/* Header */}
      <Header onClickCart={() => setCartOpned(true)} cardItems={cardItems} />
      <div className="p-40 content">
        <div className="justify-between mb-40 d-flex align-center ">
          <h1 className="fw-bold">
            {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кросовки"}
          </h1>
          {/* Поиск */}
          <form className="search-block">
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
          </form>
        </div>
        <div className="flex-wrap  sneakers d-flex">
          {/* карточки товаров  */}
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => {
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
