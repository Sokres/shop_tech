import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { FormEvent, useState } from 'react';
import supabase from '../../superbase';

export type LoginForm = {
	email: {
		value: string;
	};
	password: {
		value: string;
	};
};
const Login = () => {
	const [er, setEr] = useState<string | undefined>();
	console.log(er);

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		// setEr(false);
		const target = e.target as typeof e.target & LoginForm;
		const { email, password } = target;
		await sendLog(email.value, password.value);
	};
	const sendLog = async (email: string, password: string) => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});
		setEr(error?.message);
		// console.log(data);
		console.log(error?.message === undefined);
	};
	return (
		<div className="auth-wraper">
			<form className="form-auth" onSubmit={submit}>
				<h1 className="form-auth__title">Вход</h1>
				{er && (
					<div className="message-error">Неправильный логин или пароль</div>
				)}
				<Input
					type="email"
					name="email"
					placeholder="Введите ваш email"
					className={'input-auth input-auth--name'}
				/>
				<Input
					type="password"
					name="password"
					autoComplete="on"
					placeholder="Введите ваш пароль"
					className={'input-auth input-auth--pass'}
				/>
				<Button>Войти</Button>
				<div className="form-auth__info">
					<h2 className="form-auth__info-title">Еще не зарегистрированы?</h2>
					<Link className="form-auth__link" to="../registration">
						Регистрация
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
