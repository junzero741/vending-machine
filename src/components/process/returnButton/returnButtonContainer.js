import MessagesContainer from "../messages/messagesContainer.js"
import ReturnButtonPresentational from "./returnButtonPresentational.js"

class ReturnButtonContainer {
    constructor({ $target, moneyPocket }) {
        this.$target = $target;
        this.moneyPocket = moneyPocket;
        this.messages = [];
        this.setState();
    }

    setState(money) {
        this.messages.push(`잔돈 ${money}원이 반환 되었습니다.`)
        this.currentMessages += this.messages;
        this.render();
    }

    render() {
        this.components = {
            updatedMessages: new MessagesContainer({
                // const $process = document.querySelector(".process-section")
                // $target: $process.querySelector(".messages-section")
                currentMessages: this.currentMessages
            })
        };
        this.presentational = new ReturnButtonPresentational({
            $target: this.$target,
            moneyPocket = this.moneyPocket
        });
    }

}

export default ReturnButtonContainer