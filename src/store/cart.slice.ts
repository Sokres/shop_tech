import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartProduct {
	id: string;
	count: number;
}
export interface CartState {
	items: CartProduct[];
}
const initialState: CartState = { items: [] };
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<string>) => {
			//Проверяем существование идентификатора
			const verify = state.items.find((item) => item.id === action.payload);
			if (!verify) {
				state.items.push({ id: action.payload, count: 1 });
				return state;
			}
			state.items.map((item) => {
				if (item.id === action.payload) {
					item.count++;
				}
				return item;
			});
		},
	},
});
export default cartSlice.reducer;
export const cartAction = cartSlice.actions;
