export const initialState = {
  basket: [],
  user: null,
};

//화살표 함수임에도 불구하고 중괄호({})를 쓰지 않는 이유
export const getBasketTotal = (basket) =>
  basket?.reduce((acc, item) => item.price + acc, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // findIndex함수의 한계 발생 -> redux를 이용하면 해결 가능
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("(id" + action.id + ") not found in basket");
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
