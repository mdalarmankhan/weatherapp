import DomUtil from './domUtil.js';
class WeatherWrapper {
    static render(parentElement, data, systemUsed){
        const element = DomUtil.createElement('div', [{key: 'class', value: 'WeatherWrapper'}])
        const innerHeading = DomUtil.createElement('h1', [{key: 'class', value: 'locationTitle'}]);
        innerHeading.innerHTML = 'Sydney, AU';

        const innerParagraph = DomUtil.createElement('p', [{key: 'class', value: 'weatherDescription'}]);
        innerParagraph.innerHTML = 'clear sky';

        const innerImage = DomUtil.createElement('img', [{key: 'src', value: 'icons/01d.svg'}, {key: 'width', value: '300'}, {key: 'height', value: '300'}]);

        const innerHeading2 = DomUtil.createElement('h1', [{key: 'class', value: 'mainTemp'}]);
        innerHeading2.innerHTML = '16°C';

        const innerParagraph2 = DomUtil.createElement('p');
        innerParagraph2.innerHTML = 'Feels like 16°C';

        element.appendChild(innerHeading);
        element.appendChild(innerParagraph);

        element.appendChild(innerImage);

        element.appendChild(innerHeading2);
        element.appendChild(innerParagraph2);
        parentElement.appendChild(element);




    // static render(parentElement){
    //     const element = DomUtil.createElement('div', [{key: 'class', value: 'errSrc'}])
    //     element.classList.add('errScr');
    //     const innerDiv = DomUtil.createElement('div');
        

    //     const heading = document.createElement('h1');

    //     heading.setAttribute('style', 'margin-bottom: 30px;')

    //     heading.innerHTML = 'City not found, try again!';

    //     innerDiv.appendChild(heading);
    //     element.appendChild(innerDiv);
    //     parentElement.appendChild(element);
    //     Search.render(innerDiv);

    // }
    }
}

export default WeatherWrapper;
