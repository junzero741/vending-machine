class MessagesPresentational {
	constructor({ $target, messages }) {
		this.render($target, messages);
	}

	render($target, messages) {
		$target.innerHTML = "";

		messages.forEach((message) => {
			const $message = `
            <div class="message">${message}</div>
            `;
			$target.insertAdjacentHTML("beforeend", $message)
		})
	}
}

export default MessagesPresentational