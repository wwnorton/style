import React from 'react';

export default class Foo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: true,
		};
	}

	render() {
		const { isOpen } = this.state;
		if (!isOpen) return null;
		const { className } = this.props;
		return (
			<div
				className={className}
			>
				foo
			</div>
		);
	}
}

Foo.propTypes = {
	className: String,
};

Foo.defaultProps = {
	className: 'foo',
};
