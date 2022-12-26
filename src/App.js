import "./index.scss";
import Search from "./assets/img/search.svg";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";

function App() {
  const arr = [
    { name: "Мужские Кроссовки Nike Air Max 270", price: 10000 },
    { name: "Мужские Кроссовки Nike Air Max 280", price: 10000 },
    { name: "Мужские Кроссовки Nike Air Max 290", price: 10000 },
    { name: "Мужские Кроссовки Nike Air Max 230", price: 10000 },
  ];
  return (
    <div className="wrapper clear">
      {/* Корзина */}
      <Cart />
      {/* Header */}
      <Header />
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
              <p>{item.name}</p>
              
            )
          })} */}
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
