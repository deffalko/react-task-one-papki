import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Item } from "./Item";

const ItemList = () => {
  // Инициализация состояния для хранения элементов
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editItemId, setEditItemId] = useState(null); // Состояние для хранения id редактируемого элемента
  const [editValue, setEditValue] = useState(""); // Состояние для хранения нового значения

  // Функция для добавления нового элемента
  const addItem = () => {
    if (inputValue) {
      const newItem = { id: Date.now(), name: inputValue }; // Создаем новый элемент с уникальным id
      setItems([...items, newItem]); // Обновляем состояние, добавляя новый элемент
      setInputValue(""); // Очищаем поле ввода
    }
    if (inputValue === "d") {
      console.log("dsds");
      const newItem = { id: Date.now(), name: inputValue }; // Создаем новый элемент с уникальным id
      setItems([...items, newItem]); // Обновляем состояние, добавляя новый элемент
      removeItem();
      setInputValue("пожалуйста без знаков"); // Очищаем поле ввода
    }
  };

  // Функция для удаления элемента
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id)); // Фильтруем элементы, исключая удаляемый
  };

  // Функция для начала редактирования элемента
  const startEdit = (item) => {
    setEditItemId(item.id); // Устанавливаем id редактируемого элемента
    setEditValue(item.name); // Устанавливаем текущее значение для редактирования
  };

  // Функция для сохранения изменений
  const saveEdit = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, name: editValue } : item
      )
    ); // Обновляем имя элемента
    setEditItemId(null); // Сбрасываем id редактируемого элемента
    setEditValue(""); // Очищаем значение редактирования
  };

  // Обработчик нажатия клавиш
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (editItemId) {
        saveEdit(editItemId); // Сохраняем изменения, если редактируем элемент
      } else {
        addItem(); // Вызываем функцию добавления элемента
      }
    }
  };

  const addText = () => {
    render(<Item />);
  };

  return (
    <div>
      <h1>Список элементов</h1>
      <input
        type="text"
        value={editItemId ? editValue : inputValue} // Используем editValue, если редактируем элемент
        onChange={(e) =>
          editItemId
            ? setEditValue(e.target.value)
            : setInputValue(e.target.value)
        } // Обновляем состояние при вводе
        onKeyDown={handleKeyDown} // Добавляем обработчик нажатия клавиш
      />
      <button
        className="btn"
        onClick={editItemId ? () => saveEdit(editItemId) : addItem}
      >
        {editItemId ? "Сохранить" : "Добавить элемент"}
      </button>
      <ul>
        {items.map((item) => (
          <li className="list" key={item.id}>
            <i className="material-icons">mail</i>
            {item.name}
            <button className="btn" onClick={() => startEdit(item)}>
              <i className="material-icons">edit</i>
            </button>
            <button className="btn" onClick={() => removeItem(item.id)}>
              <i className="material-icons">delete</i>
            </button>
            <button className="btn" onClick={() => addText(item)}>
              <i className="material-icons">add</i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
