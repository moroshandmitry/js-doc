import { NavLink as Link } from 'react-router-dom';
import { useEffect } from 'react';
import { highlightAll, plugins } from 'prismjs';

require('prismjs/components/prism-jsx.min');
require('prismjs/components/prism-scss.min');
require('prismjs/plugins/toolbar/prism-toolbar');
require('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard');

export const ReduxInfoPage = () => {
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

	const indexFile = `//index.js file
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { App } from "./App";

const defaultState = {
	cash: 1000
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
	case "ADD_CASH":
		return { ...state, cash: state.cash + action.payload };
	case "GET_CASH":
		return { ...state, cash: state.cash - action.payload };

	default:
		return state;
	}
};

const store = createStore(reducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
`;

	const appFile = `//App.js file
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";

export const App = () => {
  /**
   * 1 Есть dispatch в него передаётся action (type)
   * 2 Как action будет менять состояние, определенно
   * внутри reducer
   * 3 reduser - чистая функция принимает state и action
   * возвращает новый объект состояния
   * 4 reducer передаётся в store и store с помощью Provider
   */
  const dispatch = useDispatch();

  const cash = useSelector((state) => state.cash);

  const addCash = (cash) => dispatch({ type: "ADD_CASH", payload: cash });
  const getCash = (cash) => dispatch({ type: "GET_CASH", payload: cash });

  return (
    <div className="App">
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => addCash(Number(prompt()))}
      >
        Add money
      </button>
      <div className="cash">{cash}</div>
      <button
        className="btn btn-danger"
        type="button"
        onClick={() => getCash(Number(prompt()))}
      >
        Get money
      </button>
    </div>
  );
};
`;

	const scssFile = `
.App {
	display: flex;
	justify-content: center;
	font-family: sans-serif;
	font-size: 2rem;
  
	.btn {
	  padding: 0.7rem;
	  font-size: 1rem;
	  font-weight: 700;
	  outline: 0;
	  border: none;
	  border-radius: 0.3rem;
	  color: #fff;
	  cursor: pointer;
	}
	
	.btn-primary {
	  background-color: #065ab4;
	  border-color: #007bff;
  
	  &:hover {
		background-color: #097df8;
	  }
	}
	
	.btn-danger {
	  background-color: #af2b38;
	  border-color: #dc3545;
  
	  &:hover {
		background-color: #f7071f;
	  }
	}
	
	.cash {
	  max-width: 15rem;
	  text-align: center;
	  margin: 0 0.7rem 0 0.7rem;
	}
  }
`;

	return (
		<div>
			<div>
				<p>Storage (Global STATE) - Big object that contains state</p>
				<p>getState - To look at the current storage - returned state</p>
				<p>dispatch - to send update in store </p>
				<p>
					replaceReducer - take one of the existing reducers and replace with
					another reducer
				</p>
				<p>subscribe - notifying method our app about a update store</p>
				<p>
					subscribe(listener) - listener is a function for update app render
				</p>
				<p>
					Big reducer will contain more small reducers for example: small
					reducer contain info page, another small reducer contain another info
					page
				</p>
			</div>
			<div style={{ margin: '1.5rem 0' }}>
				Click me -{' '}
				<Link
					style={{ color: '#444', marginTop: '1rem' }}
					to={{
						pathname:
							'https://codesandbox.io/s/basics-knowledge-of-redax-ykgpq?file=/src/index.js',
					}}
					target="_blank"
				>
					Redux in codesendbox
				</Link>
			</div>
			<pre className="lang-js">
				<code className="lang-jsx">{indexFile}</code>
			</pre>
			<pre className="lang-js">
				<code className="lang-jsx">{appFile}</code>
			</pre>
			<pre>
				<code className="lang-scss">{scssFile}</code>
			</pre>
		</div>
	);
};
