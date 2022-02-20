class Foo {
	// Not allowed: indent with spaces (indent)
  constructor() {
		this.foo = 'foo';
		this.bar = 'bar';
	}

	get foobar() { return this.foo + this.bar; }
}

export default Foo;
