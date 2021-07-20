/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import formatDate from './formatDate.mjs';

export default class TextPostMaker {
    constructor(value) {
        this.value = value;
        this.container = null;
        this.positionErrorElement = null;
        this.longitude = null;
        this.latitude = null;
    }

    build() {
        const textPostContainer = document.createElement('div');
        textPostContainer.classList.add('text-post-container');

        const postTextContent = document.createElement('p');
        postTextContent.classList.add('post-text-content');
        postTextContent.textContent = this.value;

        const coordsContent = document.createElement('p');
        coordsContent.classList.add('coords-content');
        coordsContent.textContent = `${this.longitude}, ${this.latitude}`;

        const dateContent = document.createElement('p');
        dateContent.classList.add('date-content');
        const date = new Date();
        const dateString = formatDate(date);
        dateContent.textContent = dateString;

        textPostContainer.appendChild(postTextContent);
        textPostContainer.appendChild(coordsContent);
        textPostContainer.appendChild(dateContent);

        this.container.appendChild(textPostContainer);

        this.container.scrollTo(0, this.container.scrollHeight);
    }

    geoLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    this.longitude = longitude;
                    this.latitude = latitude;
                    this.build();
                }, (positionError) => this.customGeoLocation(),
            );
        }
    }

    customGeoLocation() {
        const positionErrorContainer = document.createElement('div');
        positionErrorContainer.classList.add('position-error-container');
        this.positionErrorElement = positionErrorContainer;

        const positionErrorTitle = document.createElement('p');
        positionErrorTitle.textContent = 'Что-то пошло не так';
        positionErrorContainer.appendChild(positionErrorTitle);

        const positionErrorTextContent = document.createElement('p');
        positionErrorTextContent.textContent = 
            'К сожалению, нам не удалось определить ваше местоположение, пожалуйста дайте разрешение на использование геолокации, либо введите координаты вручную';

        positionErrorContainer.appendChild(positionErrorTextContent);

        const customCoordsInputTitle = document.createElement('p');
        customCoordsInputTitle.textContent = 'Широта и долгота через запятую';
        positionErrorContainer.appendChild(customCoordsInputTitle);

        const customCoordsInput = document.createElement('input');
        customCoordsInput.classList.add('custom-coords-input');
        positionErrorContainer.appendChild(customCoordsInput);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-button');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', this.closeHandler.bind(this));
        buttonsContainer.appendChild(cancelButton);

        const okButton = document.createElement('button');
        okButton.classList.add('ok-button');
        okButton.textContent = 'OK';
        okButton.addEventListener('click', this.addingCustomCoords.bind(this));
        buttonsContainer.appendChild(okButton);

        positionErrorContainer.appendChild(buttonsContainer);
        this.container.appendChild(positionErrorContainer);
    }

    closeHandler() {
        this.positionErrorElement.remove();
    }

    addingCustomCoords() {
        const customCoordsInput = document.getElementsByClassName('custom-coords-input')[0];
        const customCoordsValue = customCoordsInput.value;
        const validity = this.customCoordsValidity(customCoordsValue);
        if (validity) {
            //this.value = customCoordsValue;
            this.build();
            this.closeHandler();
        } else {
            alert('Неверно введены координаты!');
        }
    }

    customCoordsValidity(value) {
        const result = value.match(/^\[?\d+\.\d+,\s?\d+\.\d+\]?$/);
        if (result === null) {
            return false;
        } 
            return true;
    }

    bindToDom(container) {
        this.container = container;
    }
}
