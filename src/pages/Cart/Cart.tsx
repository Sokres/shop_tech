import { useSelector } from 'react-redux';
import cl from './Cart.module.css';
import { RootState } from '../../store/store';
import { ProductData } from '../../interfaces/product.interface';
import axios from 'axios';
import { url } from '../../helpers/API';
import { useEffect, useState } from 'react';
import CartItem from '../../components/CartItems/CartItem';
const Cart = () => {
	//Большой вопрос в оптимальности данного подхода, мне кажется лучше все добавить в store
	const [product, setProduct] = useState<ProductData[]>();
	const items = useSelector((s: RootState) => s.cart.items);

	const getCard = async (id: string) => {
		const { data } = await axios.get<ProductData>(`${url}/${id}`);
		return data;
	};
	const loadCard = async () => {
		const res = await Promise.all(items.map((item) => getCard(item.id)));
		setProduct(res);
	};
	useEffect(() => {
		loadCard();
	}, [items]);
	return (
		<section className={cl.cart}>
			<div className={cl.box}>
				{items.map((i) => {
					const prod = product?.find((p) => p.id === i.id);
					if (!prod) {
						return;
					}
					return <CartItem key={i.id} count={i.count} {...prod} />;
				})}
			</div>
			<div className={cl.box_total}>
				<h2 className={cl.box_total__title}>Итого к оплате</h2>
				<p className={cl.box_total__price}>
					{items
						.map((i) => {
							const prod = product?.find((p) => p.id === i.id);
							if (!prod) {
								return 0;
							}
							return prod.price * i.count;
						})
						.reduce((a, b) => (a += b))}
				</p>
			</div>
		</section>
	);
};

export default Cart;
