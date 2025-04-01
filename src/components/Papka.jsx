import React, { useState } from "react";

const ItemList = () => {
  // Инициализация состояния для хранения элементов
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Функция для добавления нового элемента
  const addItem = () => {
    if (inputValue) {
      const newItem = { id: Date.now(), name: inputValue }; // Создаем новый элемент с уникальным id
      setItems([...items, newItem]); // Обновляем состояние, добавляя новый элемент
      setInputValue(""); // Очищаем поле ввода
    }
  };

  // Функция для удаления элемента
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id)); // Фильтруем элементы, исключая удаляемый
  };

  return (
    <div>
      <h1>Список элементов</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Обновляем состояние при вводе
      />
      <button onClick={addItem}>Добавить элемент</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItem(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
