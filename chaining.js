class Widget {
	constructor(isHidden) {
		this.isHidden = isHidden;
	}

	show() {
		if(this.isHidden)
			this.isHidden = false;
		return this; // this is a key concept for chaining
	}

	animate() {
		this.classList.add('animated');
		return this;
	}

	hide() {
		this.isHidden = true;
		return this;
	}
}