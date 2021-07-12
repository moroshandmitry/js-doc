import { NavLink as Link } from 'react-router-dom';

import s from './LeftPanel.module.scss';

const LINKS = [
	{
		id: 1,
		url: '/fakepage',
		title: 'Fake page',
	},
];

export const LeftPanel = () => {
	return (
		<ul className={s.leftPanel}>
			{LINKS.map(({ id, url, title }) => {
				return (
					<li key={id}>
						<Link to={url}>{title}</Link>
					</li>
				);
			})}
		</ul>
	);
};
