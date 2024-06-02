import { Link, Outlet } from 'react-router-dom';
import Lgoo from '../../components/Logo/Lgoo';

const AuthLayot = () => {
	return (
		<>
			<Link to="/">
				<Lgoo className={'auth-logo'} />
			</Link>
			<Outlet />
		</>
	);
};

export default AuthLayot;
