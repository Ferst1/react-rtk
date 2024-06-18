import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {id: 101, title: 'Велосипед', price: 10500},
        {id: 102, title: 'Самокат', price: 5600},
        {id: 103, title: 'Телевизор', price: 14000},
        {id: 104, title: 'Компьютер', price: 7600},
        {id: 105, title: 'Ролики', price: 2200},
    ]
}

export const delLastProductAction = createAction('DEL_LAST_PRODUCT');
export const delByIdAction=createAction('DEL_BY_ID');
export const sortByPriceAction=createAction('SORT_BY_PRICE');


const productReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(delLastProductAction, (state) => {
            state.products.pop();
        })

        .addCase(delByIdAction, (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        })

        .addCase(sortByPriceAction, (state) => {
            state.products.sort((a, b) => a.price - b.price);
        })
});

export default productReducer;
