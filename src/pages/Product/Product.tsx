import { Await, useLoaderData } from 'react-router-dom';
import { ProductData } from '../../interfaces/product.interface';
import { Suspense } from 'react';
import cl from './Product.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartAction } from '../../store/cart.slice';

const Product = () => {
	const data = useLoaderData() as { data: ProductData };
	const dispach = useDispatch<AppDispatch>();
	const addItem = (id: string) => {
		dispach(cartAction.addItem(id));
	};
	return (
		<>
			<Suspense
				fallback={
					<>
						<img src="./img/spinning-circles.svg" alt="Загрузка" />
					</>
				}
			>
				<Await resolve={data.data}>
					{({ data }: { data: ProductData }) => (
						<div className={cl.product}>
							<img
								src={data.image}
								alt={data.imageAlt}
								className={cl.product__image}
							/>
							<h2 className={cl.product__text}>{data.text}</h2>

							<button
								onClick={() => addItem(data.id)}
								className={cl.product__btn}
							>
								<span>Добавить в корзину </span>
								<span className={cl.product__price}>{data.price}</span>
							</button>
						</div>
					)}
				</Await>
			</Suspense>
			;
		</>
	);
};

export default Product;
