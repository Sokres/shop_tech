import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
export const CART_STATE = 'cartData';

export interface CartProduct {
	id: string;
	count: number;
}
export interface CartState {
	items: CartProduct[];
}
const initialState: CartState = loadState<CartState>(CART_STATE) ?? {
	items: [],
};
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		deletItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		removeItem: (state, action: PayloadAction<string>) => {
			const verify = state.items.find((item) => item.id === action.payload);
			if (verify) {
				if (verify.count === 1) {
					state.items = state.items.filter(
						(item) => item.id !== action.payload
					);
				} else {
					state.items.map((item) => {
						if (item.id === action.payload) {
							item.count--;
						}
						return item;
					});
				}
				return;
			}
		},
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
