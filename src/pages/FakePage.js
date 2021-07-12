import { useEffect } from 'react';
import Prism from 'prismjs';

export const FakePage = () => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<div>
			<pre>
				<code class="language-js">console.log('Hello, world!');</code>
			</pre>
		</div>
	);
};
