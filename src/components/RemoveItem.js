import React, { useState, useEffect, Fragment } from "react";
import "./AddItem.css";
import axios from "axios";

const RemoveItem = () => {
  const [item, setItem] = useState({});
  var [hasCompleteInput, setHasCompleteInput] = useState(false);

  const inputHandler = article => {
    setItem({
      ...item,
      [article.target.name]: article.target.value
    });
  };

  const addNewItemHandler = () => {
    if (!item.articleName || !item.quantity) {
      console.log(item);
      console.log("Incomplete information.");
    } else {
      setHasCompleteInput(true);
    }
  };

  useEffect(() => {
    if (hasCompleteInput) {
      const addNewItem = async () => {
        const result = await axios.get(
          "http://localhost:9999/Manager/Remove?name=" +
            item.articleName +
            "&quantity=" +
            item.quantity
        );
        console.log(result);
      };
      addNewItem();
      console.log("An item has been added");
      setHasCompleteInput(false);
    }
  }, [item, hasCompleteInput]);

  return (
    <Fragment>
      <div className="Container">
        <p className="Input-container">
          <label className="Label">
            Article name:
            <input
              className="Input"
              name="articleName"
              type="text"
              onChange={inputHandler}
            />
          </label>
        </p>
        <p className="Input-container">
          <label>
            Price:
            <input
              className="Input"
              name="articlePrice"
              type="number"
              step="0.01"
              onChange={inputHandler}
            />
          </label>
        </p>
        <p className="Input-container">
          <label>
            Description:
            <input
              name="description"
              className="Input"
              type="text"
              onChange={inputHandler}
            />
          </label>
        </p>
        <p className="Input-container">
          <label>
            Quantity:
            <input
              className="Input"
              name="quantity"
              type="number"
              onChange={inputHandler}
            />
          </label>
        </p>
        <p className="Input-container">
          <div>
            <button className="Button" onClick={addNewItemHandler}>
              ADD NEW ITEM
            </button>
            <button className="Button">ADD ITEM</button>
          </div>
        </p>
      </div>
    </Fragment>
  );
};

export default RemoveItem;
