import { forwardRef } from 'react';
import { InputProps } from './Input.props';
import cl from './Input.module.scss';
import cn from 'classnames';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ className, ...props },
	ref
) {
	return (
		<label className={cl['labelInput']}>
			<input ref={ref} className={cn(className, cl.input)} {...props} />
		</label>
	);
});

export default Input;
