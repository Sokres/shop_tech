import cl from './Search.module.scss';
import cn from 'classnames';
import IMAGES from '../../Images/IMAGES';
import { ChangeEvent, forwardRef } from 'react';
import { SearchProps } from './Search.props';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { searchAction } from '../../store/search.slice';

const Search = forwardRef<HTMLInputElement, SearchProps>(
	({ ...props }, ref) => {
		const dispatch = useDispatch<AppDispatch>();
		const seachElem = useSelector((s: RootState) => s.search);
		const setSeachElem = (e: ChangeEvent<HTMLInputElement>) => {
			const seachElem = e.target.value;
			dispatch(searchAction.searchIt(seachElem));
		};
		return (
			<label className={cn(cl.search)}>
				<input
					value={seachElem.SearchProduct}
					onChange={setSeachElem}
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
