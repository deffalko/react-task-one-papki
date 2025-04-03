import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Item } from "./Item";

const ItemList = () => {
  // Создаем состояние для хранения списка элементов
  const [items, setItems] = useState([]);

  // Функция для добавления нового элемента
  const addItem = () => {
    setItems([...items, <Item key={items.length} />]); // Добавляем новый элемент в массив
  };

  return (
    <>
      <div className="box">
        <button className="btn">
          <i className="material-icons">email</i>
        </button>
        <input className="input" type="text" />
        <button className="btn">
          <i className="material-icons">edit</i>
        </button>
        <button className="btn" onClick={addItem}>
          <i className="material-icons">add</i>
        </button>
      </div>
      <div className="item-list">
        {items} {/* Рендерим список элементов */}
      </div>
    </>
  );
};

export { ItemList };
