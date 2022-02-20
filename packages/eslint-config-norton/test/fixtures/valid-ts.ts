export class Foo {
	// Allowed: sequential single-line class fields without a space between
	// (`lines-between-class-members`)
	foo: string;
	#bar: string;

	constructor() {
		this.foo = 'foo';
		this.#bar = 'bar';
	}

	get foobar() {
		return this.foo + this.#bar;
	}
}
