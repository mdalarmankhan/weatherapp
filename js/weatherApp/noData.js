import DomUtil from './domUtil.js';
import Search from './search.js';

class NoData{
    static render(parentElement){
        const element = DomUtil.createElement('div', [{key: 'class', value: 'errSrc'}])
        element.classList.add('errScr');
        const innerDiv = DomUtil.createElement('div');
        

        const heading = document.createElement('h1');

        heading.setAttribute('style', 'margin-bottom: 30px;')

        heading.innerHTML = 'City not found, try again!';

        innerDiv.appendChild(heading);
        element.appendChild(innerDiv);
        parentElement.appendChild(element);
        Search.render(innerDiv);

    }
}

export default NoData;

{/* <input type="text" class="searchInput" placeholder="Search a city..." /> */}