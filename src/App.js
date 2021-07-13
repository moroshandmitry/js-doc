import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { highlightAll, plugins } from 'prismjs';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

import s from './App.module.scss';

require('prismjs/components/prism-jsx.min');
require('prismjs/plugins/toolbar/prism-toolbar');
require('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard');

export const App = () => {
	useEffect(() => {
		plugins.toolbar.registerButton('select-code', function (env) {
			const button = document.createElement('button');
			button.innerHTML = 'Select Code';
			button.style.marginLeft = '15px';

			button.addEventListener('click', function () {
				if (document.body.createTextRange) {
					// ms
					const range = document.body.createTextRange();
					range.moveToElementText(env.element);
					range.select();
				} else if (window.getSelection) {
					// moz, opera, webkit
					const selection = window.getSelection();
					const range = document.createRange();
					range.selectNodeContents(env.element);
					selection.removeAllRanges();
					selection.addRange(range);
				}
			});

			return button;
		});

		highlightAll();
	}, []);

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
