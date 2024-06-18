import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SearchState {
	SearchProduct: string;
}

const initialState: SearchState = { SearchProduct: '' };
export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		searchIt: (state, action: PayloadAction<string>) => {
			return { ...state, SearchProduct: action.payload };
		},
	},
});
export default searchSlice.reducer;
export const searchAction = searchSlice.actions;
