import { FC, MouseEventHandler } from 'react';
import { CardProps } from './Card.props';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartAction } from '../../store/cart.slice';

const Card: FC<CardProps> = (props) => {
	const dispach = useDispatch<AppDispatch>();
	const addCart: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		dispach(cartAction.addItem(props.id));
	};
	// Вопрос, нужно ли делать фиксированную высоту до того как подгрузились картинки
	return (
		<div className="product-card__item card">
			<Link to={`/product/${props.id}`}>
				<img src={props.image} alt={props.imageAlt} className="card__img" />
				<p className="cart__name">{props.title}</p>
			</Link>
			<div className="card__wrap">
				<div className="card__price">
					{props.price} <span>₽</span>
				</div>
				<button className="card__btn" onClick={addCart}>
					<img
						src="/img/addIn.svg"
						alt="Значок корзины"
						className="cart__card"
						width={50}
					/>
				</button>
			</div>
		</div>
	);
};

export default Card;
