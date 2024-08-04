
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";
const CartContext = createContext();

const GetLocalStorageData = () => {
    let newlocalStorageData = localStorage.getItem("localStorageData");

    // Check if the local storage data is null or an empty string
    if (!newlocalStorageData) {
        return [];

    } else {

        return JSON.parse(newlocalStorageData);
    }
}

const initialState = {
    // cart: [],
    cart: GetLocalStorageData(),
    total_item: 0,
    total_amount: 0,

    total_MRP_amount: 0,
    shipping_fee: 100,
};

export function CartContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, productColorId, PresentProduct, isPresentStocks, selectedSize, amount, fetchedFilterData) => {

        dispatch({ type: "ADD_TO_CART", payload: { id, productColorId, PresentProduct, isPresentStocks, selectedSize, amount, fetchedFilterData } });
    };

    //Increment and Decrement the Product.....
    const setDecrease = (productId) => {

        dispatch({ type: "SET_DECREASE", payload: productId })
    };

    const setIncrease = (productId) => {

        dispatch({ type: "SET_INCREASE", payload: productId })

    };



    //Remove items from cart.....
    const removeItem = (productId) => {
        dispatch({ type: "REMOVE_ITEM", payload: productId });
    };
    
    //Remove items from cart.....
    const clearCurtData = ( ) => {
        dispatch({ type: "CLEAR_CART" });
    };

    //Add data to localstorage.........

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEMS" })
        dispatch({ type: "CART_TOTAL_PRICE" })
        dispatch({ type: "CART_TOTAL_MRP_PRICE" })
        localStorage.setItem("localStorageData", JSON.stringify(state.cart))

    }, [state.cart])



    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                removeItem,
                setDecrease,
                setIncrease,
                clearCurtData
            }}>
            {children}
        </CartContext.Provider>
    );
};


// export { CartContextProvider, useContext }

export const useCartContext = () => {
    return useContext(CartContext);
}