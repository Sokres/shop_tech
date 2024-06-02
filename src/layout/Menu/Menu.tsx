import { NavLink, Outlet } from 'react-router-dom';
import IMAGES from '../../Images/IMAGES';
import Lgoo from '../../components/Logo/Lgoo';
import useDeviceDetect from '../../hook/DeviceScrin';
import Search from '../../components/Search/Search';

const Layout = () => {
	const { isMobile } = useDeviceDetect();
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
						</NavLink>

						<div className="user">
							<NavLink className="link-user" to="/auth">
								<img
									className="link-user__img"
									src={IMAGES.user}
									alt="Значок пользователя"
								/>
								<span className="link-user__text">Пользователь</span>
							</NavLink>
							<div className="link-user__wrap">
								<button className="link-user__exit">Выйти</button>
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
