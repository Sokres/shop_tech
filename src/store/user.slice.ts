import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import supabase from '../superbase';
import { User, UserMetadata } from '@supabase/supabase-js';
import { Profile } from '../interfaces/profile.interface';

export const JWT_STATE = 'userData';

export interface UserState {
	jwt: string | null | undefined;
	loginError?: string;
	//Внимательно посмотреть на доку superbase, чет мне кажется он плохо типипзирован
	profile?: UserMetadata | Profile;
}
export interface GetUserResponse {
	data: {
		user: User | null | undefined;
	};
}
export interface UserJwtState {
	jwt: string | null | undefined;
}

const initialState: UserState = {
	jwt: loadState<UserJwtState>(JWT_STATE)?.jwt ?? null,
};

export const reg = createAsyncThunk(
	'user/reg',
	async (params: { email: string; name: string; password: string }) => {
		const { data, error } = await supabase.auth.signUp({
			email: params.email,
			password: params.password,
			options: {
				data: {
					first_name: params.name,
				},
			},
		});
		if (error) {
			throw new Error(error.message);
		}
		console.log(data);
		return data.session;
	}
);
export const login = createAsyncThunk(
	'user/login',
	async (params: { email: string; password: string }) => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: params.email,
			password: params.password,
		});
		if (error) {
			throw new Error(error.message);
		}
		return data.session;
	}
);
export const getUsers = createAsyncThunk<User | null>(
	'user/getUsers',
	async () => {
		const {
			data: { user },
		}: GetUserResponse = await supabase.auth.getUser();

		if (!user) return null;
		return user;
	}
);
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// addJwt: (state, action: PayloadAction<string | undefined>) => {
		// 	state.jwt = action.payload;
		// 	console.log('смотрим state', state.jwt);
		// },
		logout: (state) => {
			state.jwt = null;
		},
		cleatloginError: (state) => {
			state.loginError = undefined;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(reg.fulfilled, (state, action) => {
			state.jwt = action.payload?.access_token || null;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.jwt = action.payload?.access_token || null;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.loginError = action.error.message;
		});
		builder.addCase(getUsers.fulfilled, (state, action) => {
			state.profile = action.payload?.user_metadata;
		});
	},
});
export default userSlice.reducer;
export const userAction = userSlice.actions;
