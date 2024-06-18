import { useEffect, useState } from 'react';
import { url } from '../../helpers/API';
import Card from '../Card/Card';
import { ProductData } from '../../interfaces/product.interface';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const ProductCard = () => {
	const [products, setProduct] = useState<ProductData[]>([]);
	const [isLoadiing, setIsLoading] = useState<boolean>(false);
	const seachElem = useSelector((s: RootState) => s.search.SearchProduct);

	const getCard = async (text?: string) => {
		try {
			setIsLoading(false);
			const { data } = await axios.get<ProductData[]>(`${url}`, {
				params: { text },
			});
			// console.log(data);
			setProduct(data);
			setIsLoading(true);
		} catch (e) {
			setIsLoading(false);
			console.error('Ошибка', e);
			return;
		}
	};

	useEffect(() => {
		getCard(seachElem);
	}, [seachElem]);
	return (
		<>
			<ul className="product-card">
				{isLoadiing &&
					products.length > 0 &&
					products.map((product) => (
						<Card
							key={product.id}
							id={product.id}
							image={product.image}
							imageAlt={product.imageAlt}
							title={product.text}
							price={product.price}
						/>
					))}
				{isLoadiing && seachElem ? <>Не удалось найти товары</> : <></>}
			</ul>
		</>
	);
};

export default ProductCard;
