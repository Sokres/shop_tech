import { configureStore } from '@reduxjs/toolkit';
import userSlice, { JWT_STATE } from './user.slice';
import { saveState } from './storage';
import cartSlice, { CART_STATE } from './cart.slice';
import searchSlice from './search.slice';

export const store = configureStore({
	reducer: {
		user: userSlice,
		cart: cartSlice,
		search: searchSlice,
	},
});
store.subscribe(() => {
	saveState({ jwt: store.getState().user.jwt }, JWT_STATE);
	saveState(store.getState().cart, CART_STATE);
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
