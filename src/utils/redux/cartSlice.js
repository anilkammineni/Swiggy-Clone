import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const id = newItem?.card?.info?.id;

            const existingItem = state.items.find(
                (item) => item.card?.info?.id === id
            );

            if (existingItem) {
                existingItem.qty = (existingItem.qty || 1) + 1;
            } else {
                state.items.push({ ...newItem, qty: 1 });
            }
        },
        removeItem: (state, action) => {
            const id = action.payload?.card?.info?.id;
            const index = state.items.findIndex(item => item.card?.info?.id === id)

            if (index !== -1)
            {
                const item = state.items[index];
                 
                if (item.qty > 1){
                    item.qty -= 1;
                }
                else {
                    state.items.splice(index, 1);
                }
            }
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;