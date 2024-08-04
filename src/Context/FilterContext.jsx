import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { useProductContext } from "../Context/ProductContext";
import FilterReducer from "../Reducer/FilterReducer";

const FilterContext = createContext();


const initialState = {

    filter_products: [],
    displayData: [],
    displayProgress: "",
    all_products: [],
    grid_view: true,
    sorting_value: "All Product",
    filters: {
        text: "",
        category: "",
        rating: "",
        discount: "",
        color: [],
        company: [],
        Price: 0,
        Minprice: 0,
        Maxprice: 0,
        shirtSize: [],
        TrouserSize: [],
        shoueSize: [],
        phoneCapacity: [],
        laptopCapacity: [],

        febricName: [],
        occasionName: [],
        fitTypeName: [],
        offersName: [],
        availableOn: [],
    },
    showFilterButton: false,

};

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();
    const [state, dispatch] = useReducer(FilterReducer, initialState);

    // to load all the products for grid and list view

    useEffect(() => {

        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });

    }, [products]);

    // to sort the product
    useEffect(() => {

        dispatch({ type: "SORTING_PRODUCTS", payload: products });


    }, [state.sorting_value, products]);


    useEffect(() => {

        dispatch({ type: "FILTER_PRODUCTS" });

    }, [state.filters]);



    // to set the grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    };

    // to set the list view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    };

    // sorting function
    const sorting = (event) => {
        let selectedValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: selectedValue });
    };

    // update the filter values...............

    const updateFilterValue = (event) => {

        const { name, value, checked } = event.target;
        let updatedValues;

        // Define a helper function to update the filter values based on the checked status
        const updateValues = (currentValues) => {

            return checked
                ? [...currentValues, value]
                : currentValues.filter(item => item !== value);
        };

        
        // Define a helper function to update Check uncheckd values
        const SingaleUpdateValues = (currentVal) => {
            return currentVal === value ? '' : value;

        };

        // Use a switch statement to handle different filter types
        switch (name) {
            case "company":
                updatedValues = updateValues(state.filters.company);
                break;
            case "color":
                updatedValues = updateValues(state.filters.color);
                break;
            case "phoneCapacity":
                updatedValues = updateValues(state.filters.phoneCapacity);
                break;
            case "laptopCapacity":
                updatedValues = updateValues(state.filters.laptopCapacity);
                break;
            case "shirtSize":
                updatedValues = updateValues(state.filters.shirtSize);
                break;
            case "TrouserSize":
                updatedValues = updateValues(state.filters.TrouserSize);
                break;
            case "shoueSize":
                updatedValues = updateValues(state.filters.shoueSize);
                break;
            case "febricName":
                updatedValues = updateValues(state.filters.febricName);
                break;
            case "occasionName":
                updatedValues = updateValues(state.filters.occasionName);
                break;
            case "fitTypeName":
                updatedValues = updateValues(state.filters.fitTypeName);
                break;
            case "offersName":
                updatedValues = updateValues(state.filters.offersName);
                break;
            case "availableOn":
                updatedValues = updateValues(state.filters.availableOn);
                break;
            case "category":
                updatedValues = SingaleUpdateValues(state.filters.category);
                break;
            case "rating":
                updatedValues = SingaleUpdateValues(state.filters.rating);
                break;
            case "discount":
                updatedValues = SingaleUpdateValues(state.filters.discount);
                break;
            default:
                updatedValues = value;
                break;
        }

        dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value: updatedValues } });
    };




    //inputFieldClear Function
    const inputFieldClear = () => {
        return dispatch({ type: "INPUT_FIELD_CLEAR" });

    }
    //inputFieldClear Function
    const ClearCategoryData = () => {
        return dispatch({ type: "CATEGORY_FIELD_CLEAR" });

    }
    //inputFieldClear Function
    const ClearCompanyData = () => {
        return dispatch({ type: "COMPANY_FIELD_CLEAR" });

    }
    //inputFieldClear Function
    const ClearRatingData = () => {
        return dispatch({ type: "RATING_FIELD_CLEAR" });

    }
    //inputFieldClear Function
    const ClearPriceData = () => {
        return dispatch({ type: "PRICE_FIELD_CLEAR" });

    }
    //Color FieldClear Function
    const ClearColorData = () => {
        return dispatch({ type: "COLOR_FIELD_CLEAR" });

    }
    //Color FieldClear Function
    const ClearDiscountData = () => {
        return dispatch({ type: "DISCOUNT_FIELD_CLEAR" });

    }
    //ClearAll SizeCategory Function........
    const ClearAllSizeCategory = () => {
        return dispatch({ type: "All_SIZE_FIELD_CLEAR" });

    }
    //ClearAll CapacityData Function........
    const ClearAllCapacityData = () => {
        return dispatch({ type: "All_CAPACITY_FIELD_CLEAR" });

    }
    //ClearAll AvailabilityData Function........
    const CleaAvailabilityDataFilter = () => {
        return dispatch({ type: "All_AVAILABILITY_DATA_FIELD_CLEAR" });

    }
    //ClearAll OffersData Function........
    const CleaOffersDataFilter = () => {
        return dispatch({ type: "All_OFFERS_DATA_FIELD_CLEAR" });

    }
    //ClearAll FittingsData Function........
    const CleaFittingsDataFilter = () => {
        return dispatch({ type: "All_FITTINGS_DATA_FIELD_CLEAR" });

    }
    //ClearAll OccasionData Function........
    const CleaOccasionDataFilter = () => {
        return dispatch({ type: "All_OCCASION_DATA_FIELD_CLEAR" });

    }
    //ClearAll FebricData Function........
    const CleaFebricDataFilter = () => {
        return dispatch({ type: "All_FEBRIC_DATA_FIELD_CLEAR" });

    }


    //ClearAllFilter Function........
    const ClearAllFilter = () => {
        return dispatch({ type: "All_Filter_FIELD_CLEAR" });

    }


    return (
        <FilterContext.Provider
            value={{
                ...state,
                dispatch,
                setGridView,
                setListView,
                sorting,
                updateFilterValue,
                inputFieldClear,
                ClearCategoryData,
                ClearCompanyData,
                ClearRatingData,
                ClearPriceData,
                ClearColorData,
                ClearDiscountData,
                ClearAllSizeCategory,
                ClearAllCapacityData,
                CleaAvailabilityDataFilter,
                CleaOffersDataFilter,
                CleaFittingsDataFilter,
                CleaOccasionDataFilter,
                CleaFebricDataFilter,
                ClearAllFilter,
            }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};