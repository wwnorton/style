class Foo {
	// Not allowed: indent with spaces (`indent`)
  foo: string;
	#bar: string;

	// Not allowed: sequential blocks without a space between (`lines-between-class-members`)
	constructor() {
		this.foo = 'foo';
		this.#bar = 'bar';
	}
	get foobar() {
		return this.foo + this.#bar;
	}
}

// Not allowed: default export (`import/no-default-export`)
export default Foo;
