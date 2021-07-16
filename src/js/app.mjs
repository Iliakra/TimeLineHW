/* eslint-disable linebreak-style */
import TextPostMaker from './TextPostMaker.mjs';
// eslint-disable-next-line linebreak-style

const newTextPost = new TextPostMaker();

const submitHandler = (event) => {
    event.preventDefault();
    newTextPost.bindToDom(document.querySelector('timeline-container'));
    newTextPost.geoLocation();
};

const input = document.getElementById('timeline-input-form');
input.addEventListener('submit', submitHandler);
