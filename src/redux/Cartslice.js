import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    products:[],
    totalQuantity :0,
    totalPrice : 0
};

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart(state,action){
            const newItem = action.payload;
            const itemIndex = state.products.find((item)=>item.id === newItem.id)
            if(itemIndex){
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.price
            }else{
                state.products.push({
                    id : newItem.id,
                    name : newItem.title,
                    price:newItem.price,
                    quantity: 1,
                    image : newItem.image,
                    totalPrice : newItem.price
                })
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },
        
        removeFromCart(state,action){
            const findItem = state.products.find(item=>item.id===action.payload)
            if (findItem){
                state.totalPrice -= findItem.totalPrice
                state.totalQuantity -=findItem.quantity
               state.products= state.products.filter(item=>item.id!==action.payload)
            }
        },
        increaseQuantity(state,action){
            const findItem = state.products.find(item=>item.id===action.payload)
            if(findItem){
                findItem.quantity++;
                findItem.totalPrice += findItem.price
                state.totalQuantity++;
                state.totalPrice += findItem.price

             }
        },
        decreaseQuantity(state,action){
            const findItem = state.products.find(item=>item.id===action.payload)
           if(findItem.quantity > 1) {
            if(findItem){
                findItem.quantity--;
                findItem.totalPrice -= findItem.price
                state.totalQuantity--;
                state.totalPrice -= findItem.price

             }
            }
        }
    },     

})


export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity}= cartSlice.actions;
export default cartSlice.reducer;