
function CartReducer(state, action) {

    switch (action.type) {

        case "ADD_TO_CART":
            let { id, productColorId, PresentProduct, isPresentStocks, selectedSize, amount, fetchedFilterData } = action.payload;



            //Track the exsisting Product......
            const exsistingProduct = state.cart.find((curElem) => curElem.productId === id + productColorId + selectedSize);

            console.log("exsistingProduct", exsistingProduct)

            if (exsistingProduct) {

                const updateProduct = state.cart.map((curElem) => {

                    if (curElem.productId === id + productColorId + selectedSize) {

                        let newproductQuantity = curElem.productQuantity + amount

                        if (newproductQuantity >= curElem.productMaxQuantity) {
                            newproductQuantity = curElem.productMaxQuantity
                        }

                        return {
                            ...curElem,
                            productQuantity: newproductQuantity

                        }

                    } else {
                        return curElem

                    }
                })
                return {
                    ...state,
                    cart: updateProduct,
                };

            } else {

                let cartProduct = {
                    productId: id + productColorId + selectedSize,
                    productSize: selectedSize,
                    productColor: productColorId,
                    productQuantity: amount,
                    productMaxQuantity: isPresentStocks,
                    productName: fetchedFilterData?.title,
                    productImg: PresentProduct?.variations[0]?.url, // Optional chaining to avoid errors
                    productPrice: fetchedFilterData?.priceINR,
                    productMRP: fetchedFilterData?.MRPINR,
                };

                return {
                    ...state,
                    cart: [...state.cart, cartProduct]
                };
            }

        // Increment and Decrement the Product.....
        case "SET_DECREASE":

            let decreaseQuantity = state.cart.map((curElem) => {

                if (curElem.productId === action.payload) {

                    console.log("Match this product....", curElem);

                    let newProductQuantity = curElem.productQuantity - 1;

                    // Ensure quantity doesn't go below 1 
                    if (newProductQuantity < 1) {
                        newProductQuantity = 1;
                    }

                    return {
                        ...curElem,
                        productQuantity: newProductQuantity,
                    };
                } else {
                    return curElem;
                }
            });

            return {
                ...state,
                cart: decreaseQuantity,
            };

        case "SET_INCREASE":

            let increaseQuantity = state.cart.map((curElem) => {

                if (curElem.productId === action.payload) {

                    console.log("Match this product....", curElem);

                    let newProductQuantity = curElem.productQuantity + 1;

                    // Ensure quantity doesn't up to productMaxQuantity  
                    if (newProductQuantity > curElem.productMaxQuantity) {
                        newProductQuantity = curElem.productMaxQuantity;
                    }

                    return {
                        ...curElem,
                        productQuantity: newProductQuantity,
                    };
                } else {
                    return curElem;
                }
            });

            return {
                ...state,
                cart: increaseQuantity,
            };



        case "REMOVE_ITEM":
            let updateCart = state.cart.filter((curElem) => curElem.productId !== action.payload);

            return {
                ...state,
                cart: updateCart
            };

        case "CART_TOTAL_ITEMS":

            // reduce method to sum up the productQuantity of each item in the cart.
            let updatedTotalItems = state.cart.reduce((initialval, curElem) => {

                let { productQuantity } = curElem;

                //initialval = initialval + productQuantity;

                initialval += productQuantity;// Equivalent to:

                return initialval


            }, 0);

            return {
                ...state,
                total_item: updatedTotalItems
            }


        case "CART_TOTAL_PRICE":
            // reduce method to calculat total price  of each item in the cart.
            let updateTotalPrice = state.cart.reduce((initialval, curElem) => {

                let { productPrice, productQuantity } = curElem;

                initialval = initialval + productPrice * productQuantity;



                return initialval


            }, 0);

            return {
                ...state,
                total_amount: updateTotalPrice
            }
        case "CART_TOTAL_MRP_PRICE":
            // reduce method to calculat total price  of each item in the cart.
            let updateTotalMRPPrice = state.cart.reduce((initialval, curElem) => {

                let { productMRP, productQuantity } = curElem;

                initialval = initialval + productMRP * productQuantity;



                return initialval


            }, 0);

            return {
                ...state,
                total_MRP_amount: updateTotalMRPPrice
            }

        case "CLEAR_CART":
            // Show a confirmation dialog to the user
            const userConfirmed = window.confirm("Are you sure you want to clear the cart?");

            if (userConfirmed) {
                // If the user confirms, proceed with clearing the cart and updating localStorage
                localStorage.setItem("localStorageData", JSON.stringify([]));

                return {
                    ...state,
                    cart: []
                };
            } else {
                // If the user cancels, do nothing and return the current state
                return state;
            }


        default:
            return state; // Return current state if action type doesn't match
    }
}

export default CartReducer