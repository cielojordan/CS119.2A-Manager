import React, { useState, useEffect } from "react";
import "./ViewInventory.css";
import axios from "axios";
import { Table } from "react-bootstrap";

const ViewInventory = () => {
  const [data, setData] = useState({ objects: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get("http://localhost:9999/Manager/viewInventory")
        .then(function(result) {
          setData({ objects: result.data });
        });

      console.log(result);
    };
    fetchData();
  }, [data]);

  return (
    <Table
      className="Manager-table-container"
      responsive
      striped
      bordered
      hover
      variant="dark"
    >
      <thead className="Manager-table-header">
        <tr>
          <th>Article ID</th>
          <th>Article Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.objects.map(item => (
          <tr hover="true" key={item.id} className="Manager-table-rows">
            <td>{item.idArticle}</td>
            <td>{item.articleName}</td>
            <td>{item.articlePrice}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ViewInventory;
