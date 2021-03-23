import CurrentMoneyContainer from "./currentMoneyDisplay/currentMoneyContatiner.js";
import MessagesContainer from "./messages/messagesContainer.js"
import ReturnButtonContainer from "./returnButton/returnButtonContainer.js"

class ProcessContainer {
    constructor({ $target, type, method, item }) {
        this.$target = $target;
        this.moneyPocket = [];
        this.messages = [];

        this.setState({ type, method, item });
    }

    setState({ type, method, item }) {
        switch (type) {
            case "cash":
                // cash 상태 변경
                this.moneyPocket.push(item);
                this.currentMoney += this.moneyPocket;
                // 메시지 상태 변경
                this.updateMessage({ method, item })
                break;

            case "goods":
                this.updateMessage({ method, item })
                // this.moneyPocket = this.changeMoney({ currentMoney: this.currentMoney, price: goods.price });
                // this.currentMoney = 0;
                // this.currentMoney += changeMoney.reduce((acc, curr) => acc + curr, 0)
                break;

            default:
                new Error(`${type} is undefined !`);
                break;
        }
        this.render();
    }

    selectMessage({ method, item }) {
        switch (method) {
            case "put":
                return `${item}원이 투입 되었습니다.`

            // 현재 return버튼 누르면 message rerendering..
            // 검토 후 case 삭제 예정..
            case "return":
                return `잔돈 ${item}원이 반환 되었습니다.`

            case "selected":
                return `${item} 선택`
        }
    }

    updateMessage({ method, item }) {
        this.messages.push(
            this.selectMessage({ method, item })
        );
        this.currentMessages += this.messages;
    }

    changeMoney({ currentMoney, price }) {
        const change = currentMoney - price;
        //거스름돈 알고리즘
    }

    render() {
        const $currentMoney = document.createElement("section");
        $currentMoney.className = "currentMoney-section";

        const $returnButton = document.createElement("button");
        $returnButton.className = "returnButton";

        const $messages = document.createElement("section");
        $messages.className = "messages-section";

        const nodes = [$currentMoney, $returnButton, $messages]

        nodes.forEach((node) => this.$target.appendChild(node))

        this.components = {
            currentMoney: new CurrentMoneyContainer({
                $target: $currentMoney,
                currentMoney: this.currentMoney
            }),
            returnButton: new ReturnButtonContainer({
                $target: $returnButton,
                moneyPocket: this.moneyPocket
            }),
            messages: new MessagesContainer({
                $target: $messages,
                currentMessages: this.currentMessages
            })
        }
    }
}

export default ProcessContainer;