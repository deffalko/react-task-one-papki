import React, { useState } from "react";
import { ItemList } from "./ItemList";
import { render } from "@testing-library/react";

const Home = () => {
  const addItemList = () => {
    render(<ItemList />);
  };

  return (
    <>
      <button className="btn" onClick={addItemList}>
        Добавить папку
      </button>
    </>
  );
};

export { Home };
