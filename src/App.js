import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from './card';

function App() {
	// const type = ['Free', 'Plus', 'Pro'];
	return (
		<div className="App">
			<div className="container card-container">
				<Card type={'Free'} />
				<Card type={'Plus'} />
				<Card type={'Pro'} />
			</div>
		</div>
	);
}

export default App;
