import React, { useState, useEffect, Fragment } from "react";
import "./ManageInventory.css";
import axios from "axios";

const ManageInventory = () => {
  const [item, setItem] = useState({});
  const [canAddItem, setCanAddItem] = useState(false);
  const [canAddNewItem, setCanAddNewItem] = useState(false);
  const [canRemoveItem, setCanRemoveItem] = useState(false);

  const inputHandler = article => {
    setItem({
      ...item,
      [article.target.name]: article.target.value
    });
  };

  const addItemHandler = () => {
    if (item.articleName && item.quantity) {
      setCanAddItem(true);
      console.log(item);
      console.log("Can only add existing item.");
    } else {
      console.log(item);
      console.log("Incomplete information.");
    }
  };

  const addNewItemHandler = () => {
    if (
      item.articleName &&
      item.articlePrice &&
      item.description &&
      item.quantity
    ) {
      setCanAddNewItem(true);
      console.log(item);
      console.log("Can add new item.");
    } else {
      console.log(item);
      console.log("Incomplete information.");
    }
  };

  const removeItemHandler = () => {
    if (!item.articleName || !item.quantity) {
      console.log(item);
      console.log("Incomplete information.");
    } else {
      setCanRemoveItem(true);
    }
  };

  useEffect(() => {
    if (canAddItem) {
      const addItem = async () => {
        const result = await axios.post(
          "http://localhost:9999/Manager/add?name=" +
            item.articleName +
            "&quantity=" +
            item.quantity
        );
        console.log(result);
      };
      addItem();
      console.log("An item has been added.");
      setCanAddItem(false);
    }
  }, [item, canAddItem]);

  useEffect(() => {
    if (canAddNewItem) {
      const addNewItem = async () => {
        const result = await axios.post(
          "http://localhost:9999/Manager/addNew?name=" +
            item.articleName +
            "&price=" +
            item.articlePrice +
            "&Description=" +
            item.description +
            "&quantity=" +
            item.quantity
        );
        console.log(result);
      };
      addNewItem();
      console.log("A new item has been added.");
      setCanAddNewItem(false);
    }
  }, [item, canAddNewItem]);

  useEffect(() => {
    if (canRemoveItem) {
      const removeItem = async () => {
        const result = await axios.post(
          "http://localhost:9999/Manager/Remove?articleName=" +
            item.articleName +
            "&quantity=" +
            item.quantity
        );
        console.log(result);
      };
      removeItem();
      console.log("An item has been removed");
      setCanRemoveItem(false);
    }
  }, [item, canRemoveItem]);

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
          <button className="Button" onClick={addItemHandler}>
            ADD
          </button>
          <button className="Button" onClick={addNewItemHandler}>
            ADD NEW ITEM
          </button>
          <button className="Button" onClick={removeItemHandler}>
            REMOVE
          </button>
        </p>
      </div>
    </Fragment>
  );
};

export default ManageInventory;
