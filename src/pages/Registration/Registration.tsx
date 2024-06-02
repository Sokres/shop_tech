import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Registration = () => {
	return (
		<div className="auth-wraper">
			<form className="form-auth" action="">
				<h1 className="form-auth__title">Регистрация</h1>
				<Input
					type="text"
					placeholder="Введите ваше имя"
					className={'input-auth input-auth--name'}
				/>
				<Input
					type="password"
					placeholder="Введите ваш пароль"
					className={'input-auth input-auth--pass'}
				/>
				<Button>Регистрация</Button>
				<div className="form-auth__info">
					<h2 className="form-auth__info-title">Уже есть аккаунт?</h2>
					<Link className="form-auth__link" to="../login">
						Войти
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Registration;
