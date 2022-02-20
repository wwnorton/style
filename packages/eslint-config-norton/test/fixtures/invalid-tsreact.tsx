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

export class FooClass extends React.PureComponent<FooProps, FooState> {
	// Not allowed: sequential blocks without a space between (`lines-between-class-members`)
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
				// Not allowed: indent with spaces (`react/jsx-indent-props`)
        className={className}
			>
				{/* Not allowed: indent with spaces (`react/jsx-indent`) */}
        { foo }
			</div>
		);
	}
}

// Not allowed: static property outside class body (`react/static-property-placement`)
FooClass.defaultProps = defaultProps;

// Not allowed: default export (`import/no-default-export`)
export default FooClass;
