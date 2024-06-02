import { Await, useLoaderData } from 'react-router-dom';
import { ProductData } from '../../interfaces/product.interface';
import { Suspense } from 'react';

const Product = () => {
	const data = useLoaderData() as { data: ProductData };

	return (
		<>
			<Suspense fallback={<>Загрузка...</>}>
				<Await resolve={data.data}>
					{({ data }: { data: ProductData }) => <div>Product -{data.id} </div>}
				</Await>
			</Suspense>
			;
		</>
	);
};

export default Product;
