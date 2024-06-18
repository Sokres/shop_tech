import cl from './CartItem.module.css';
import cn from 'classnames';
import { CartItems } from './CartItem.props';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartAction } from '../../store/cart.slice';
const CartItem: FC<CartItems> = (props) => {
	const dispatch = useDispatch<AppDispatch>();
	const inc = () => {
		dispatch(cartAction.addItem(props.id));
	};
	const dec = () => {
		dispatch(cartAction.removeItem(props.id));
	};
	const remove = () => {
		dispatch(cartAction.deletItem(props.id));
	};
	return (
		<div className={cl.box_card}>
			<img
				src={props.image}
				alt={props.imageAlt}
				className={cl.card_cart__img}
			/>
			<div className={cl.card_cart__wrap_info}>
				<p className={cl.card_cart__text}>{props.text}</p>
				<div className={cl.card_cart__price}>{props.price}</div>
			</div>
			<div className={cl.card_card__box_count}>
				<button className={cn(cl.card_card__btn, cl.btn_dec)} onClick={dec}>
					-
				</button>
				<div className={cl.card_card__input}>{props.count}</div>
				<button className={cn(cl.card_card__btn, cl.btn__inc)} onClick={inc}>
					+
				</button>
			</div>
			<button className={cl.card_card__delet} onClick={remove}>
				<img src="./img/Trash.svg" width={30} height={30} alt="Удалить товар" />
			</button>
		</div>
	);
};

export default CartItem;
