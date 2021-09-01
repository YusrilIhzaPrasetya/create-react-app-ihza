import React from "react";
import DetailItem from "./DetailItem";
import { useSelector } from "react-redux";

function DisplayListItems() {
  let orderItems = useSelector((state) => {
    return state;
  });
  return (
    <div>
      <ul>
        {orderItems.map((item, index) => {
          return <DetailItem item={item} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default DisplayListItems;
