import "./index.scss";
import { useState, useEffect } from "react";
import Search from "./assets/img/search.svg";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";

function App() {
  const [items, setItems] = useState([
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      imageUrl: "./assets/img/sneakers/1.jpg",
    },
    {
      title: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
      imageUrl: "./assets/img/sneakers/2.jpg",
    },
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8499,
      imageUrl: "./assets/img/sneakers/3.jpg",
    },
    {
      title: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8499,
      imageUrl: "./assets/img/sneakers/4.jpg",
    },
    {
      title: "Мужские Кроссовки Under Armour Curry 8",
      price: 12999,
      imageUrl: "./assets/img/sneakers/5.jpg",
    },
    {
      title: "Мужские Кроссовки Nike Kyrie 7",
      price: 12999,
      imageUrl: "./assets/img/sneakers/6.jpg",
    },
    {
      title: "Мужские Кроссовки Jordan Air Jordan 11",
      price: 10799,
      imageUrl: "./assets/img/sneakers/7.jpg",
    },
    {
      title: "Мужские Кроссовки Nike LeBron XVIII",
      price: 16499,
      imageUrl: "./assets/img/sneakers/8.jpg",
    },
    {
      title: "Мужские Кроссовки Nike Lebron XVIII Low",
      price: 13999,
      imageUrl: "./assets/img/sneakers/9.jpg",
    },
  ]);
  const [cartOpned, setCartOpned] = useState(false);

  // const arr = [
  //   {
  //     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
  //     "price": 12999,
  //     "imageUrl": "./assets/img/sneakers/1.jpg",
  //   },
  //   {
  //     "title": "Мужские Кроссовки Nike Air Max 270",
  //     "price": 12999,
  //     "imageUrl": "./assets/img/sneakers/2.jpg",
  //   },
  //   {
  //     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
  //     "price": 8499,
  //     "imageUrl": "./assets/img/sneakers/3.jpg",
  //   },
  //   {
  //     "title": "Кроссовки Puma X Aka Boku Future Rider",
  //     "price": 8499,
  //     "imageUrl": "./assets/img/sneakers/4.jpg",
  //   },
  //   {
  //     "title": "Мужские Кроссовки Under Armour Curry 8",
  //     "price": 12999,
  //     "imageUrl": "./assets/img/sneakers/5.jpg",
  //   },
  //   {
  //     "title": "Мужские Кроссовки Nike Kyrie 7",
  //     "price": 12999,
  //     "imageUrl": "./assets/img/sneakers/6.jpg",
  //   },
  //   {
  //     "title": "Мужские Кроссовки Jordan Air Jordan 11",
  //     "price": 10799,
  //     "imageUrl": "./assets/img/sneakers/7.jpg",
  //   },
  //   {
  //     "title": "Мужские Кроссовки Nike LeBron XVIII",
  //     "price": 16499,
  //     "imageUrl": "./assets/img/sneakers/8.jpg",
  //   },
  //   {
  //     "title": "Мужские Кроссовки Nike Lebron XVIII Low",
  //     "price": 13999,
  //     "imageUrl": "./assets/img/sneakers/9.jpg",
  //   },
  // ];
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
                key={item.id}
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
