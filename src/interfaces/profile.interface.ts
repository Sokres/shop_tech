export interface AppMetadata {
	provider: string;
	providers: string[];
}

export interface UserMetadata {
	age: number;
	email: string;
	email_verified: boolean;
	first_name: string;
	phone_verified: boolean;
	sub: string;
}

export interface Identity {
	identity_id: string;
	id: string;
	user_id: string;
	identity_data: IdentityData;
	provider: string;
	last_sign_in_at: string;
	created_at: string;
	updated_at: string;
	email: string;
}

export interface IdentityData {
	age: number;
	email: string;
	email_verified: boolean;
	first_name: string;
	phone_verified: boolean;
	sub: string;
}
export interface Profile {
	first_name: string;
	age: number;
	email: string;
	email_verified: boolean;
	phone_verified: boolean;
	sub: string;
}
