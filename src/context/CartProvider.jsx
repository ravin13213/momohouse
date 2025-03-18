import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cartItem: [],
};

const cartReducer = (state, action) => {

  switch (action.type) {
    case "AddToCart": {
      const isExisting = state.cartItem.find((item) => item.id === action.payload.id);

      if (isExisting) {
        alert("This product is already in cart");
        return state;
      }

      const newProducts = [...state.cartItem, { ...action.payload, qty: 1 }];
      console.log(`${action.payload.name} wurde dem Warenkorb hinzugefügt`);
      return { cartItem: newProducts };
    }

    case "Increment": {
      const newCartItem = state.cartItem.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
      return { cartItem: newCartItem };
    }

    case "Decrement": {
      const newCartItem = state.cartItem
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: Math.max(1, item.qty - 1) }
            : item
        )
        .filter((item) => item.qty > 0);

      return { cartItem: newCartItem };
    }

    case "RemovalFromCart": {
      const filteredItems = state.cartItem.filter((item) => item.id !== action.payload.id);
      return { cartItem: filteredItems };
    }

    case "ClearCart": {
      return { cartItem: [] };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
