import React, { Fragment } from "react";
import logo from "./logo.png";
import "./Manager.css";
import ViewInventory from "./components/ViewInventory";
import ManageInventory from "./components/ManageInventory";

const Manager = () => {
  return (
    <Fragment>
      <div>
        <header className="Manager-header">
          <img
            width="200"
            height="200"
            src={logo}
            className="Manager-logo"
            alt="logo"
          />
        </header>
        <h1 className="Manager">MANAGER</h1>
      </div>
      <div>
        <ManageInventory></ManageInventory>
      </div>
      <div className="Inventory">
        <ViewInventory></ViewInventory>
      </div>
    </Fragment>
  );
};

export default Manager;
