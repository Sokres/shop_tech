import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { reg, userAction } from '../../store/user.slice';

export type LoginForm = {
	email: {
		value: string;
	};
	name: {
		value: string;
	};
	password: {
		value: string;
	};
};
const Registration = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const { jwt, loginError } = useSelector((s: RootState) => s.user);
	useEffect(() => {
		if (jwt) {
			navigate('/');
		}
	}, [jwt, navigate]);
	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(userAction.cleatloginError());
		const target = e.target as typeof e.target & LoginForm;
		const { email, password, name } = target;
		await sendReg(email.value, name.value, password.value);
	};
	const sendReg = async (email: string, name: string, password: string) => {
		dispatch(reg({ email, name, password }));
	};
	return (
		<div className="auth-wraper">
			<form className="form-auth" onSubmit={submit}>
				<h1 className="form-auth__title">Регистрация</h1>
				{loginError && (
					<div className="message-error">Неправильный логин или пароль</div>
				)}
				<Input
					type="email"
					name="email"
					placeholder="Введите ваш email"
					className={'input-auth input-auth--name'}
				/>
				<Input
					type="text"
					name="name"
					placeholder="Введите ваше Имя"
					className={'input-auth input-auth--name'}
				/>
				<Input
					type="password"
					name="password"
					autoComplete="on"
					placeholder="Введите ваш пароль"
					className={'input-auth input-auth--pass'}
				/>
				<Button>Зарегистрироваться</Button>
				<div className="form-auth__info">
					<h2 className="form-auth__info-title">Еще не зарегистрированы?</h2>
					<Link className="form-auth__link" to="../login">
						Регистрация
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Registration;

/* 
const Registration = () => {
	const submit = async (e: FormEvent) => {
		e.preventDefault();
		// setEr(false);
		const target = e.target as typeof e.target & LoginForm1;
		const { email, password } = target;
		await sendLog(email.value, password.value);
	};
	const sendLog = async () => {
		const { data, error } = await supabase.auth.signUp({
			email: 'bi@gmail.com',
			password: '123456',
			options: {
				data: {
					first_name: 'Анатолий',
				},
			},
		});
		console.log(data);
	};
*/
