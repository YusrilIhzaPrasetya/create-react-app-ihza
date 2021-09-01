const initialState = [];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      return [
        ...state,
        {
          nama: action.payload.nama,
          harga: action.payload.harga,
          quantity: action.payload.quantity,
        },
      ];
    default:
      return state;
  }
};

export default Reducer;
