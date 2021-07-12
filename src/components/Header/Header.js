import { NavLink as Link } from 'react-router-dom';

import s from './Header.module.scss';

const LINKS = [
	{
		id: 1,
		url: '/',
		exact: true,
		title: 'Home',
	},
	{
		id: 2,
		url: '/contacts',
		title: 'Contacts',
	},
	{
		id: 3,
		url: '/about',
		title: 'About',
	},
];

export const Header = () => {
	const htmlLinks = LINKS.map(({ id, url, exact, title }) => {
		return (
			<li key={id}>
				<Link to={url} exact>
					{title}
				</Link>
			</li>
		);
	});
	return (
		<header className={s.header}>
			<nav>
				<ul className={s.list}>{htmlLinks}</ul>
			</nav>
		</header>
	);
};
