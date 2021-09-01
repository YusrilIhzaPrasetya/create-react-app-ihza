import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  background-color: aliceblue;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 20px;
`;

function DetailItem(props) {
  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <DIV>
        <p>Nama : {props.item.nama}</p>
        <p>Harga : {props.item.harga}</p>
        <p>Quantity : {props.item.quantity}</p>
        <p>total : {props.item.harga * props.item.quantity}</p>
      </DIV>
    </div>
  );
}

export default DetailItem;
