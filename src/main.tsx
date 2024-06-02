import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './font/ClearSans-Regular.ttf';
import './font/ClearSans-Bold.ttf';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import Cart from './pages/Cart/Cart.tsx';
import Error from './pages/Error/Error.tsx';
import Layout from './layout/Menu/Menu.tsx';
import Login from './pages/Login/Login.tsx';
import Product from './pages/Product/Product.tsx';
import axios from 'axios';
import { PREFIX } from './helpers/API.ts';
import AuthLayot from './layout/Auth/AuthLayot.tsx';
import Registration from './pages/Registration/Registration.tsx';

const Catalog = lazy(() => import('./pages/Catalog/Catalog'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<>Загрузка </>}>
						<Catalog />
					</Suspense>
				),
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/product/:id',
				errorElement: <>Ошибка загрузки</>,
				element: <Product />,
				loader: async ({ params }) => {
					// const { data } = await axios.get(`${PREFIX}/product/${params.id}`);
					// return data;
					return defer({
						data: await axios.get(`${PREFIX}/product/${params.id}`),
					});
				},
			},
		],
	},
	{
		path: '/auth',
		element: <AuthLayot />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'registration',
				element: <Registration />,
			},
		],
	},
	{
		path: '*',
		element: <Error />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
