import { render } from "@testing-library/react";
import React, { useState } from "react";

function Papka() {
  // Состояние для хранения названия
  const [title, setTitle] = useState("Название");
  // Состояние для управления вводом
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveClick = () => {
    setTitle(inputValue);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setInputValue(title); // Возврат к предыдущему значению
    setIsEditing(false);
  };

  const addPapka = () => {
    render(
      <div className="papkaa">
        <a href="#!" class="collection-item">
          <span class="badge" onClick={addPapka}>
            <i class="material-icons">add</i>
          </span>
          <i class="material-icons">email</i>
        </a>
      </div>
    );
  };
  return (
    <div className="papkaa">
      <a href="#!" class="collection-item">
        <span class="badge">
          <div className="edit" onClick={handleEditClick}>
            <i class="material-icons">edit</i>
          </div>
          <i class="material-icons" onClick={addPapka}>
            add
          </i>
        </span>
      </a>
      {isEditing ? (
        <div>
          <div className="papka-name">
            <i class="material-icons">email</i>
            <input
              className="input-name-papka"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn" onClick={handleSaveClick}>
            Сохранить
          </button>
          <button className="btn" onClick={handleCancelClick}>
            Отменить
          </button>
        </div>
      ) : (
        <div>
          <div className="papka-name">
            <i class="material-icons">email</i>
            <h1 className="name-papka">{title}</h1>
          </div>
        </div>
      )}
    </div>
  );
}
export { Papka };
