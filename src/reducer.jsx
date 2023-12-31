export const initialState = {
  basket: [],
  wishes: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id != action.id),
      };

      case "ADD_TO_WISHES":
      return {
        ...state,
        wishes: [...state.wishes, action.item],
      };

    case "REMOVE_FROM_WISHES":
      return {
        ...state,
        wishes: state.wishes.filter((item) => item.id != action.id),
      };
    default:
      return state;
  }
};
export default reducer;
