import ChatWidget from './ChatWidget.mjs';
//import OpenChatButton from './OpenChatButton.mjs';

const newChatWidget = new ChatWidget();
newChatWidget.bindToDom(document.getElementById('main-container'));
newChatWidget.openButtonInit();