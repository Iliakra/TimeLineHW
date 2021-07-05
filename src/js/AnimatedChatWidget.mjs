export default class AnimatedChatWidget {
    constructor () {
        this.container = null;
    }

    init() {
        const chatOpenButton = document.createElement('button');
        chatOpenButton.classList.add('chat-open-button');
        const image = document.createElement('img');
        image.src = './src/img/redCircle.png';
        this.container.appendChild(chatOpenButton);
        this.container.appendChild(image);
    }

    bindToDOM(container) {
        this.container = container;
    }
}