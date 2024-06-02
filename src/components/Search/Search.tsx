import cl from './Search.module.scss';
import cn from 'classnames';
import IMAGES from '../../Images/IMAGES';
import { forwardRef } from 'react';
import { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(
	({ ...props }, ref) => {
		return (
			<label className={cn(cl.search)}>
				<input
					ref={ref}
					className={cl.search__input}
					type="text"
					placeholder="Поиск по каталогу"
					{...props}
				/>
				<img
					className={cl.search__img}
					src={IMAGES.search}
					alt="Значок поиска"
				/>
			</label>
		);
	}
);

export default Search;
