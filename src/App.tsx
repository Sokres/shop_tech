import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
	return (
		<>
			<Button>Hello</Button>
			<Input
				placeholder="Электронная почта"
				type="text"
				name={'inputLogin'}
			></Input>
			<Input placeholder="Пароль" type="text" name={'inputPass'}></Input>
		</>
	);
}

export default App;
