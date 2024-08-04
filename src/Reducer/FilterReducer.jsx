const FilterReducer = (state, action) => {
    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":

            let priceArr = action.payload.map((curElem) => curElem.priceINR);
            let filterPrice = Math.max(...priceArr);

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, filterPrice, Price: filterPrice },

            };


        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };


        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,

            };

        case "SORTING_PRODUCTS":

            const { filter_products, sorting_value } = state;
            let newSortData = [...filter_products];


            if (sorting_value === "All Product" || sorting_value === "Clear Filter") {
                return {
                    ...state,
                    // filter_products: [...action.payload],
                    filter_products: [...state.all_products],  // Reset to all products
                };
            }

            switch (sorting_value) {
                case "Price Low to High":
                    newSortData.sort((a, b) => a.priceINR - b.priceINR);
                    break;
                case "Price High to Low":
                    newSortData.sort((a, b) => b.priceINR - a.priceINR);
                    break;
                case "Items (A - Z)":
                    newSortData.sort((a, b) => a.company.toLowerCase().localeCompare(b.company.toLowerCase()));
                    break;
                case "Items (Z - A)":
                    newSortData.sort((a, b) => b.company.toLowerCase().localeCompare(a.company.toLowerCase()));
                    break;
                case "Whishlist Add":
                    newSortData = newSortData.filter(item => item.WhishlistAdd === true);
                    break;
                default:
                    break;
            }

            return {
                ...state,
                filter_products: newSortData,
            };




        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };

        //.........................................................................

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];
            let updateState = false;

            const {
                text,
                category,
                company,
                rating,
                Price: filtersMaxPrice, // Rename destructured maxPrice,
                Minprice,
                Maxprice,
                color,
                discount,
                shirtSize,
                TrouserSize,
                shoueSize,
                phoneCapacity,
                laptopCapacity,

                febricName,
                occasionName,
                fitTypeName,
                offersName,
                availableOn,

            } = state.filters;



            // Filter by text value...............
            if (text) {
                const searchText = text.toLowerCase();
                tempFilterProduct = tempFilterProduct.filter(product =>
                    product.category.toLowerCase().includes(searchText) ||
                    product.title.toLowerCase().includes(searchText)
                );
                updateState = true;
            }

            //Filter by category value.......
            if (category) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.category === category
                );
                updateState = true;
            }

            //Filter by company value.......
            if (company.length > 0) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => company.includes(curElem.company)
                );

                updateState = true;
            }

            //Filter by rating value.......
            if (rating) {

                // Extract the numerical part of the rating
                let numberRating = parseFloat(rating.split(" ")[0]);

                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.rating.rate >= numberRating
                );
                updateState = true;
            }

            //Filter by Minprice value.......
            if (parseInt(Minprice)) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.priceINR >= Minprice
                );
                updateState = true;
            }

            //Filter by Maxprice..........
            if (Maxprice) {
                const maxPrice = parseInt(Maxprice);
                const maxRangeVal = Math.round(filtersMaxPrice / 10000) * 10000;
                tempFilterProduct = tempFilterProduct.filter(product =>
                    maxPrice === maxRangeVal ? product.priceINR <= filtersMaxPrice : product.priceINR <= maxPrice
                );
                updateState = true;
            }
            //Filter by color..
            if (color.length > 0) {
                tempFilterProduct = tempFilterProduct.filter(curElem =>
                    curElem.colors?.some(c => color.includes(c.name))
                );
                updateState = true;
            }

            //Filter by discount value.......
            if (discount) {
                // Extract the numeric part of the discount
                let numericDiscount = parseFloat(discount.split("%")[0]);

                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.discountPersent >= numericDiscount
                );

                updateState = true;
            }


            //Filter by shirtSize..
            if (shirtSize.length > 0) {
                tempFilterProduct = tempFilterProduct.filter(curElem =>
                    curElem.size?.some(size => shirtSize.includes(size))
                );
                updateState = true;
            }

            //Filter by TrouserSize..
            if (TrouserSize.length > 0) {
                tempFilterProduct = tempFilterProduct.filter(curElem =>
                    curElem.waistSize?.some(c => TrouserSize.includes(c))
                );
                updateState = true;
            }

            //Filter by shoueSize..
            if (shoueSize.length > 0) {
                tempFilterProduct = tempFilterProduct.filter(curElem =>
                    curElem.footSize?.some(c => shoueSize.includes(c))
                );
                updateState = true;
            }



            //Filter by febricName value.......
            if (febricName.length > 0) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => febricName.includes(curElem.Febric)
                );

                updateState = true;
            }

            //Filter by occasionName value.......
            if (occasionName.length > 0) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => occasionName.includes(curElem.Occasion)
                );

                updateState = true;
            }

            //Filter by fitTypeName value.......
            if (fitTypeName.length > 0) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => fitTypeName.includes(curElem.Fittings)
                );

                updateState = true;
            }
            //Filter by offersName value.......
            if (offersName.length > 0) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => offersName.includes(curElem.Offers)
                );

                updateState = true;
            }

            //Filter by availableOn value.......
            if (availableOn.length > 0) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => availableOn.includes(curElem.Availability)
                );

                updateState = true;
            }
            //................

            //Filter by phoneCapacity value.......
            if (phoneCapacity.length > 0) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.PhoneCapacity?.some(capacity => phoneCapacity.includes(capacity.type))

                )
            }
            //Filter by laptopCapacity value.......
            if (laptopCapacity.length > 0) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.laptopCapacity?.some(c => laptopCapacity.includes(c.type))

                )
            }




            console.log("tempFilterProduct", tempFilterProduct);

            return {
                ...state,
                filter_products: tempFilterProduct,
                showFilterButton: updateState
            };


        case "INPUT_FIELD_CLEAR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: ''
                },
            };

        case "CATEGORY_FIELD_CLEAR":

            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: ''
                }
            };
        case "COMPANY_FIELD_CLEAR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    company: []
                }
            };
        case "RATING_FIELD_CLEAR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    rating: ''
                }
            };
        case "PRICE_FIELD_CLEAR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    Minprice: 0,
                    Maxprice: 0,
                }
            };
        case "COLOR_FIELD_CLEAR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    color: []
                }
            };
        case "DISCOUNT_FIELD_CLEAR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    discount: ''
                }
            };
        case "All_AVAILABILITY_DATA_FIELD_CLEAR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    availableOn: []
                }
            };
        case "All_OFFERS_DATA_FIELD_CLEAR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    offersName: []
                }
            };
        case "All_FITTINGS_DATA_FIELD_CLEAR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    fitTypeName: []
                }
            };
        case "All_OCCASION_DATA_FIELD_CLEAR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    occasionName: []
                }
            };
        case "All_FEBRIC_DATA_FIELD_CLEAR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    febricName: []
                }
            };


        case "All_Filter_FIELD_CLEAR":

            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "",
                    rating: "",
                    discount: "",
                    color: [],
                    company: [],
                    shirtSize: [],
                    TrouserSize: [],
                    shoueSize: [],
                    phoneCapacity: [],
                    laptopCapacity: [],
                    febricName: [],
                    occasionName: [],
                    fitName: [],
                    offersName: [],
                    availableOn: [],
                    Minprice: 0,
                    Maxprice: 0,
                },
                showFilterButton: false,
            };




        case "All_SIZE_FIELD_CLEAR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    shirtSize: [],
                    TrouserSize: [],
                    shoueSize: [],
                }
            };
        case "All_CAPACITY_FIELD_CLEAR":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    phoneCapacity: [],
                    laptopCapacity: []
                }
            };

        case 'SET_DATA_DISPLAY':
            return {
                ...state,
                displayData: action.payload,
            };
        case 'DATA_PROGRESS_DISPLAY':
            return {
                ...state,
                displayProgress: action.payload,
            };

        default:
            return state;
    }
};

export default FilterReducer;