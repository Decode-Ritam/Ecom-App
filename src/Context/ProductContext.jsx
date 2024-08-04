import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";
import { allProductdata } from "../ComponentsTemplate/ProductJsonData";

const AppContext = createContext();
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSidebarClose: true,
};
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = () => {

        dispatch({ type: "SET_LOADING" });
        try {

            const products = [...allProductdata];
            setTimeout(() => {
                dispatch({ type: "SET_API_DATA", payload: products });
            }, 3000);
            //  dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    // Function to update updateSidebar
    const updateSidebar = () => {
        dispatch({ type: "SET_SIDENAV_CLOSE" });
    };

    return (
        <AppContext.Provider value={{ ...state, updateSidebar }}>{children}</AppContext.Provider>
    );
};

// custom hooks
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };