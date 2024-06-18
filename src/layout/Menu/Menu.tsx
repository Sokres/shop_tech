import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import IMAGES from '../../Images/IMAGES';
import Lgoo from '../../components/Logo/Lgoo';
import useDeviceDetect from '../../hook/DeviceScrin';
import Search from '../../components/Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { userAction, getUsers } from '../../store/user.slice';
import { useEffect } from 'react';

const Layout = () => {
	const { isMobile } = useDeviceDetect();
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const logout = () => {
		dispatch(userAction.logout());
		navigate('/auth/login');
	};
	const profile = useSelector((s: RootState) => s.user.profile);
	const cartCount = useSelector((s: RootState) => s.cart.items);
	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);
	return (
		<>
			{isMobile ? (
				'oooops'
			) : (
				<header className="header">
					<nav className="nav">
						<Lgoo className={'menu-header'} />
						<NavLink className="link-catalog" to="/">
							Каталог
						</NavLink>
						<Search />

						<NavLink className="link-cart" to="/cart">
							<img
								className="link-cart__img"
								src={IMAGES.cart}
								alt="Значок корзины"
							/>
							<span className="link-cart__text"> Корзина</span>
							{cartCount.length === 0 ? null : (
								<span className="link-cart__item">
									{cartCount.reduce((acc, i) => (acc += i.count), 0)}
								</span>
							)}
						</NavLink>

						<div className="user">
							<div className="link-user">
								<img
									className="link-user__img"
									src={IMAGES.user}
									alt="Значок пользователя"
								/>
								<span className="link-user__text">{profile?.first_name}</span>
							</div>
							<div className="link-user__wrap">
								<button onClick={logout} className="link-user__exit">
									Выйти
								</button>
							</div>
						</div>
					</nav>
				</header>
			)}

			<Outlet />
		</>
	);
};

export default Layout;
