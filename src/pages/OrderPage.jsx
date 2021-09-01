import React from "react";
import FormOrder from "../components/FormOrder";
import { useEffect } from "react";
import DisplayListItems from "../components/DisplayListItems";
import TotalItem from "../components/TotalOrder";
import { useSelector } from "react-redux";

function OrderPage() {
  let orderItems = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    console.log(orderItems);
  }, [orderItems]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#1B9CFC",
      }}
    >
      <FormOrder />
      <DisplayListItems />
      <TotalItem />
    </div>
  );
}

export default OrderPage;
