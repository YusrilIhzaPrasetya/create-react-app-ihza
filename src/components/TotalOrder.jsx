import React from "react";
import { useSelector } from "react-redux";

function TotalItem() {
  let orderItems = useSelector((state) => {
    return state;
  });

  let totalBayar = (total) => {
    let hasil = 0;
    total.forEach((element) => {
      hasil += element.harga * element.quantity;
    });
    return hasil;
  };
  return (
    <div style={{ color: "white", marginBottom: "196px" }}>
      <p>Total Semua Barang : {totalBayar(orderItems)}</p>
    </div>
  );
}

export default TotalItem;
