import CurrentMoneyContainer from "./currentMoneyDisplay/currentMoneyContatiner";
import MessagesContainer from "./messages/messagesContainer"
import ReturnButtonPresentational from "./returnButton/returnButtonPresentational"

class ProcessContainer {
    constructor({ $target }) {
        //어디선가 render할 것이고 , 그때마다 상태 변경
        this.$target = $target;
        this.totalCash = [];
        this.messages = [];
        this.setState({ type, method, item });
    }

    setState({ type, method, item }) {
        switch (type) {
            case "cash":
                // cash 상태 변경
                this.totalCash.push(item);
                this.currentMoney += this.totalCash;
                // 메시지 상태 변경
                this.updateMessage({ method, item })
                break;

            case "goods":
                this.updateMessage({ method, item })
                // messages 업데이트 후 goods선택 해 따라 currenMoney변경
                // 토탈 캐쉬를 리셋
                // 알고리즘을 돌린 리턴을 뱉는다.
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

    render() {
        this.components = {
            currentMoney: new CurrentMoneyContainer({
                $target: "Dom Selector",
                currentMoney: this.currentMoney
            }),
            messages: new MessagesContainer({
                $target: "Dom Selector",
                currentMessages: this.currentMessages
            })
        }
        // this.presentationals = {
        //     returnButton: new ReturnButtonPresentational()
        // }
    }
}

export default ProcessContainer;