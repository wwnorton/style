import React from 'react';

type FooProps = React.HTMLAttributes<HTMLDivElement> & typeof defaultProps;

interface FooState {
	foo: string;
}

const defaultProps = Object.freeze({
	className: 'foo',
});

// Functional

export function FooExpression({ className }: FooProps) {
	return <div className={className}>foo</div>;
}

export const FooDeclaration = function FooFunction({ className }: FooProps) {
	return <div className={className}>foo</div>;
};

// Classical

export class FooClass extends React.Component<FooProps, FooState> {
	static defaultProps = defaultProps;

	constructor(props: FooProps) {
		super(props);
		this.state = {
			foo: 'foo',
		};
	}

	render() {
		const { className } = this.props;
		const { foo } = this.state;

		return (
			<div
				className={className}
			>
				{ foo }
			</div>
		);
	}
}
