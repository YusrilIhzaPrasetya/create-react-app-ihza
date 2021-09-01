import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const FORM = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
`;

const BUTTON = styled.button`
  padding: 15px 30px;
  border: none;
  margin-top: 15px;
  margin-bottom: 20px;
  border-radius: 20px;
  cursor: pointer;
`;

function FormOrder() {
  let dispatch = useDispatch();
  // Kenapa useDispacth tidak parameter? karena buat mendapatkan return dispatchnya

  const [inputNama, setInputNama] = useState("");
  const [inputHarga, setInputHarga] = useState(0);
  const [inputJumlah, setInputJumlah] = useState(0);

  const nama = (event) => {
    setInputNama(event.target.value);
  };

  const harga = (event) => {
    setInputHarga(event.target.value);
  };

  const jumlah = (event) => {
    setInputJumlah(event.target.value);
  };

  let submitcuy = (event) => {
    event.preventDefault();
    event.target.reset();

    dispatch({
      type: "ADD_ORDER",
      payload: {
        nama: inputNama,
        harga: inputHarga,
        quantity: inputJumlah,
      },
    });
  };

  return (
    <FORM onSubmit={submitcuy}>
      <DIV>
        <input
          style={{
            width: "300px",
            height: "30px",
            borderRadius: "20px",
            border: "none",
            marginTop: "15px",
            padding: "5px",
            textAlign: "center",
          }}
          type="text"
          name="nama"
          onChange={nama}
          placeholder="Masukan Nama Barang"
        />
        <input
          style={{
            width: "300px",
            height: "30px",
            borderRadius: "20px",
            border: "none",
            marginTop: "15px",
            padding: "5px",
            textAlign: "center",
          }}
          type="text"
          name="harga"
          onChange={harga}
          placeholder="Masukan Harga Barang"
        />
        <input
          style={{
            width: "300px",
            height: "30px",
            borderRadius: "20px",
            border: "none",
            marginTop: "15px",
            padding: "5px",
            textAlign: "center",
          }}
          type="text"
          name="quantity"
          onChange={jumlah}
          placeholder="Masukan Jumlah Barang"
        />
      </DIV>
      <div>
        <BUTTON type="submit" value="submit">
          SUBMIT
        </BUTTON>
      </div>
    </FORM>
  );
}

export default FormOrder;
