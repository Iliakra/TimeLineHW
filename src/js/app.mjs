import AnimatedChatWidget from './AnimatedChatWidget.mjs';

const newChatWidget = new AnimatedChatWidget();
newChatWidget.bindToDOM(document.getElementById('main-container'));
newChatWidget.init();

console.log('appjs');