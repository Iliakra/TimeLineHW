/* eslint-disable linebreak-style */
import ChatWidget from './ChatWidget.mjs';
// eslint-disable-next-line linebreak-style

const newChatWidget = new ChatWidget();
newChatWidget.bindToDom(document.getElementById('main-container'));
newChatWidget.openButtonInit();
