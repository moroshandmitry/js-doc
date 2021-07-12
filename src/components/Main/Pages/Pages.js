import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../../../pages/Home';
import { Contacts } from '../../../pages/Contacts';
import { About } from '../../../pages/About';

import s from './Pages.module.scss';

export const Pages = () => {
	return (
		<div className={s.pages}>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>

				<Route path="/contacts" exact>
					<Contacts />
				</Route>

				<Route path="/about" exact>
					<About />
				</Route>

				<Redirect to="/" />
			</Switch>
		</div>
	);
};
