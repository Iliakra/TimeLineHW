/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
export default class TextPostMaker {
    constructor() {
        this.container = null;
        this.closeButton = null;
    }

    geoLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    console.log('lati', latitude);
                }, (positionError) => console.log('ERROR'),
            );
        }
    }

    bindToDom(container) {
        this.container = container;
    }
}
