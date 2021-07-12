import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from './App';

import './globalStyles.scss';
import './prism.css';
import reportWebVitals from './reportWebVitals';

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
