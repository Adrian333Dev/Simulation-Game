// Web Component Test

class CustomComponent extends HTMLElement {
	constructor() {
		super();
		this.addEventListener('click', this.onClick);
	}

	onClick() {
		alert('Hello World!');
	}

	connectedCallback() {
		this.innerHTML = '<h1>Hello World!</h1>';
	}
}

// export the custom element
export default CustomComponent;
