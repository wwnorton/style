import React from 'react';

function Foo({ className }) {
	const [foo] = React.useState('foo');
	return (
		<div
			// Not allowed: indent with spaces (`react/jsx-indent-props`)
      className={className}
		>
			{/* Not allowed: indent with spaces (`react/jsx-indent`) */}
      { foo }
		</div>
	);
}

Foo.propTypes = {
	className: String,
};

Foo.defaultProps = {
	className: 'foo',
};

export default Foo;
