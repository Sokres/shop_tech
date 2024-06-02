import { FC } from 'react';
import { CardProps } from './Card.props';
import { Link } from 'react-router-dom';

const Card: FC<CardProps> = (props) => {
	return (
		<Link to={`/product/${props.id}`} className="product-card__item card">
			<img src={props.image} alt={props.imageAlt} className="card__img" />
			<p className="cart__name">{props.title}</p>
			<div className="card__wrap">
				<div className="card__price">
					{props.price} <span>₽</span>
				</div>
				<button className="card__btn">
					<img
						src="/img/addIn.svg"
						alt="Значок корзины"
						className="cart__card"
						width={50}
					/>
				</button>
			</div>
		</Link>
	);
};

export default Card;
