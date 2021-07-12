import s from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={s.footer}>
			All rights reserved {new Date().getFullYear()}
		</footer>
	);
};
