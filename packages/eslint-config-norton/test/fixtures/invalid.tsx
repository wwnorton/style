import React from 'react';

type FooProps = React.HTMLAttributes<HTMLDivElement>;
interface FooState { isOpen: boolean; }

export default class Foo extends React.Component<FooProps, FooState> {
	constructor(props: FooProps) {
		super(props);
		this.state = {
			isOpen: true,
		}
	}

	render(): JSX.Element {
		const { isOpen } = this.state
		;if (!isOpen) return null;;
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

Foo.defaultProps = {
	className: 'foo',
};
