import { FC } from 'react';
import IMAGES from '../../Images/IMAGES';
import cl from './Logo.module.scss';
import cn from 'classnames';
import { Logo } from './Logo.props';

const Lgoo: FC<Logo> = ({ className }) => {
	return (
		<div className={cn(cl.logo, className)}>
			<span className={cn(cl.logo__text)}>E-Tech Store</span>
			<img
				src={IMAGES.Logo}
				alt="Логотип"
				className={cl.logo__img}
				width={70}
				height={70}
			/>
		</div>
	);
};

export default Lgoo;
