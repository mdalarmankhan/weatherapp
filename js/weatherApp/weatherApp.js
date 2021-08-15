import API from './api.js';

import NoData from './noData.js';

import Loading from './loading.js';

import WeatherComponent from './weatherComponent.js';



class WeatherApp{
    rootElement;
    static render(data, systemUsed) {
        if(!data) {
            NoData.render(this.rootElement);
        }
        else {
            WeatherComponent.render(this.rootElement, data, systemUsed)

            console.log(data);
            // this.rootElement
        }
    }
    static init(selector){
        try{
            this.rootElement = document.querySelector(selector);
            if(!this.rootElement) throw `Could not find ${selector}`;

            const defaultCity = 'Sydney';
            const systemUsed = 'metric';
            Loading.render(this.rootElement);
            API.getWeatherData(defaultCity)
                .then(data => {
                    Loading.remove(this.rootElement);
                    this.render(data, systemUsed)
                })
        }
        catch (error) {
            console.log(error);
        }
    }
}
export default WeatherApp;