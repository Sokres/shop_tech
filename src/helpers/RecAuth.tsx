import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

const RecAuth: FC<{ children: ReactNode }> = ({ children }) => {
	const JWT = useSelector((state: RootState) => state.user.jwt);
	if (!JWT) {
		return <Navigate to="/auth/login" replace />;
	}
	return children;
};

export default RecAuth;
