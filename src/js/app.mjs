/* eslint-disable linebreak-style */
import TextPostMaker from './TextPostMaker.mjs';
// eslint-disable-next-line linebreak-style
const input = document.getElementsByClassName('timeline-input')[0];

const submitHandler = (event) => {
    event.preventDefault();
    let inputValue = input.value;
    const newTextPost = new TextPostMaker(inputValue);
    newTextPost.bindToDom(document.getElementsByClassName('timeline-posts-container')[0]);
    newTextPost.geoLocation();
};

const form = document.getElementById('timeline-input-form');
form.addEventListener('submit', submitHandler);
