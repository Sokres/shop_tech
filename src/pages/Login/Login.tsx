import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { login, userAction } from '../../store/user.slice';

export type LoginForm = {
	email: {
		value: string;
	};
	password: {
		value: string;
	};
};
const Login = () => {
	// const [er, setEr] = useState<string | undefined>();
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
		const { email, password } = target;
		await sendLog(email.value, password.value);
	};
	const sendLog = async (email: string, password: string) => {
		dispatch(login({ email, password }));
	};
	return (
		<div className="auth-wraper">
			<form className="form-auth" onSubmit={submit}>
				<h1 className="form-auth__title">Вход</h1>
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
