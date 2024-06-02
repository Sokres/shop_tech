import { useEffect, useState } from 'react';
import { PREFIX } from '../../helpers/API';
import Card from '../Card/Card';
import { ProductData } from '../../interfaces/product.interface';
import axios from 'axios';

const ProductCard = () => {
	const [products, setProduct] = useState<ProductData[]>([]);
	const [isLoadiing, setIsLoading] = useState<boolean>(false);
	const getCard = async () => {
		try {
			setIsLoading(false);
			const { data } = await axios.get<ProductData[]>(`${PREFIX}/product`);
			setProduct(data);
			setIsLoading(true);
		} catch (e) {
			setIsLoading(false);
			console.log(e);
			return;
		}
	};
	useEffect(() => {
		getCard();
	}, []);
	return (
		<>
			<ul className="product-card">
				{isLoadiing &&
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
				{!isLoadiing && <>Загрузка</>}
			</ul>
		</>
	);
};

export default ProductCard;
