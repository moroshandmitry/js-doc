import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

import s from './App.module.scss';

export const App = () => {
	return (
		<div className={s.app}>
			<Router>
				<Header />
				<Main />
			</Router>
			<Footer />
		</div>
	);
};
