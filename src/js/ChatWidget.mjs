/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
export default class ChatWidget {
    constructor() {
        this.container = null;
        this.buttonElement = null;
        this.chatWindowElement = null;
        this.closeButton = null;
    }

    openButtonInit() {
        const chatOpenButtonContainer = document.createElement('div');
        chatOpenButtonContainer.classList.add('chat-open-button-container');

        const chatOpenButton = document.createElement('button');
        this.buttonElement = chatOpenButton;
        this.buttonElement.addEventListener('click', this.openChatWindow.bind(this));
        this.buttonElement.classList.add('chat-open-button');

        const openButtonImage = document.createElement('img');
        openButtonImage.classList.add('open-button-image');
        openButtonImage.src = './src/img/redCircle-new.png';
        this.buttonElement.appendChild(openButtonImage);

        chatOpenButtonContainer.appendChild(this.buttonElement);
        this.container.appendChild(chatOpenButtonContainer);
    }

    chatWindowInit() {
        const chatWindowContainer = document.createElement('div');
        this.chatWindowElement = chatWindowContainer;
        this.chatWindowElement.classList.add('chat-window-container');

        const title = document.createElement('p');
        title.classList.add('chat-window-title');
        title.textContent = 'Напишите нам';
        this.chatWindowElement.appendChild(title);

        const textareaContainer = document.createElement('div');
        textareaContainer.classList.add('textarea-container');

        const chatWindowTextarea = document.createElement('textarea');
        chatWindowTextarea.classList.add('chat-window-textarea');

        const submitButton = document.createElement('button');
        submitButton.classList.add('submit-button');
        submitButton.textContent = 'Отправить';

        textareaContainer.appendChild(chatWindowTextarea);
        textareaContainer.appendChild(submitButton);
        this.chatWindowElement.appendChild(textareaContainer);

        const chatWindowCloseButton = document.createElement('button');
        chatWindowCloseButton.classList.add('chat-window-close-button');
        chatWindowCloseButton.addEventListener('click', this.closeChatWindow.bind(this));
        this.closeButton = chatWindowCloseButton;
        this.chatWindowElement.appendChild(this.closeButton);

        const closeButtonImage = document.createElement('img');
        closeButtonImage.classList.add('close-button-image');
        closeButtonImage.src = './src/img/close.jpg';
        chatWindowCloseButton.appendChild(closeButtonImage);

        this.container.appendChild(this.chatWindowElement);
    }

    openChatWindow() {
        this.chatWindowInit();
        if (this.buttonElement.classList.contains('appear-animation')) {
            this.buttonElement.classList.remove('appear-animation');
        } 
        this.buttonElement.classList.add('chat-open-button-disappear');
        this.chatWindowElement.classList.add('appear-animation');
    }

    closeChatWindow() {
        this.closeButton.classList.add('close-button-animation');
        this.buttonElement.classList.remove('chat-open-button-disappear');
        this.buttonElement.classList.add('appear-animation');
        this.chatWindowElement.classList.add('chat-window-disappear-animation');
        this.removeChatWindowElement();
    }

    removeChatWindowElement() {
        setTimeout(() => this.chatWindowElement.remove(), 500);
    }

    bindToDom(container) {
        this.container = container;
    }
}
