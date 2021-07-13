export const FakePage = () => {
	const code = `//React
const App = props => {
  return (
    <div>
      <h1>React App</h1>
      <div>Awesome code</div>
    </div>
  );
};`;

	return (
		<div>
			<pre>
				<code className="lang-jsx">{code}</code>
			</pre>
		</div>
	);
};
