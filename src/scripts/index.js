import '../styles/index.css';
import { createMain, createFooter, createHeader, createNavigation, createContent } from './main.js';
import Background from '../assets/restaurant-background.jpg';
import Dish from '../assets/japanese-home-dish.jpg';

const restaurantBackground = new Image();
const detailsContainer = document.createElement('div');
const dish = new Image();
const details = document.createElement('div');
const detailsHeader = document.createElement('h3');
const detailsText = document.createElement('p');
const main = createMain();
const content = createContent();

restaurantBackground.src = Background;
restaurantBackground.classList.add('restaurant-background');

detailsContainer.classList.add('details-container');
dish.src = Dish;
detailsHeader.textContent = 'Freshly Made For Your Appetite';
detailsText.textContent = 'Come and visit us or order online today!';

details.appendChild(detailsHeader);
details.appendChild(detailsText);
detailsContainer.appendChild(dish);
detailsContainer.appendChild(details)

content.appendChild(createHeader());
content.appendChild(createNavigation('home'));
content.appendChild(detailsContainer);

main.appendChild(restaurantBackground);
main.appendChild(content);
main.appendChild(createFooter());

document.body.appendChild(main);