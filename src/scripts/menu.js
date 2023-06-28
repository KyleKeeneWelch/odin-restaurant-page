import '../styles/menu.css';
import { createMain, createFooter, createHeader, createNavigation, createContent } from './main.js';

import MixedPlatter from '../assets/mixed-platter.jpg';
import CrispyAromaticDuck from '../assets/crispy-aromatic-duck.jpg';
import MisoSoup from '../assets/miso-soup.jpg';
import SpareRibs from '../assets/spare-ribs-in-syrup.jpg';
import JapaneseTofu from '../assets/japanese-tofu.jpg';

import ChickenCurry from '../assets/japanese-chicken-curry.jpg';
import BeefBlackBean from '../assets/beef-in-black-bean-sauce.jpg';
import SatayPork from '../assets/satay-pork.jpg';
import SweetSourChkn from '../assets/sweet-and-sour-chicken.jpg';
import SweetSourChknBalls from '../assets/sweet-and-sour-chicken-balls.jpg';

import SpecialFN from '../assets/special-fried-noodles.jpg';
import BeefFN from '../assets/beef-fried-noodles.jpg';
import ChickenFN from '../assets/chicken-fried-noodles.jpg';
import BbqPorkFN from '../assets/bbq-pork-fried-noodles.jpg';
import SingaporeFN from '../assets/singapore-fried-noodles.jpg';

import Coke from '../assets/coke.jpg';
import SevenUp from '../assets/7up.jpg';
import GreenTea from '../assets/green-tea.jpg';
import RedBull from '../assets/red-bull.jpg';
import StillWater from '../assets/still-water.jpg';

const main = createMain();
const content = createContent();
const menuItemsContainer = document.createElement('div');
const menuDisplayContainer = document.createElement('div');

const menu = [
    [
        'Mixed Platter - £11.50',
        'Crispy Aromatic Duck - £11.80',
        'Miso Soup - £4.00',
        'Spare Ribs in Syrup - £6.20',
        'Japanese Tofu - £5.20',
    ],
    [
        'Chicken Curry - £9.00',
        'Beef in Black Bean Sauce - £8.50',
        'Satay Pork - £8.50',
        'Sweet & Sour Chicken - £8.50',
        'Sweet & Sour Chicken Balls - £8.00'
    ],
    [
        'Special Fried Noodles - £8.50',
        'Beef Fried Noodles - £8.50',
        'Chicken Fried Noodles - £8.50',
        'BBQ Pork Fried Noodles - £8.50',
        'Singapore Fried Noodles - £9.00'
    ],
    [
        'Coke - £2.00',
        '7up - £2.00',
        'Green Tea - £2.50',
        'Red Bull - £2.50',
        'Still Water - £1.40'
    ]
];

const displayImages = [
    [
        MixedPlatter,
        CrispyAromaticDuck,
        MisoSoup,
        SpareRibs,
        JapaneseTofu,
    ],
    [
        ChickenCurry,
        BeefBlackBean,
        SatayPork,
        SweetSourChkn,
        SweetSourChknBalls
    ],
    [
        SpecialFN,
        BeefFN,
        ChickenFN,
        BbqPorkFN,
        SingaporeFN
    ],
    [
        Coke,
        SevenUp,
        GreenTea,
        RedBull,
        StillWater
    ],
];

menuItemsContainer.classList.add('menu-items-container');
menuDisplayContainer.classList.add('menu-display-container');

function getCategory(category) {
    const index = menu.indexOf(category);

    switch(index) {
        case 0:
            return 'Appetizers';
            break;
        case 1:
            return 'Dishes';
            break;
        case 2:
            return 'Fried Noodles';
            break;
        case 3:
            return 'Drinks';
            break;
    }
}

menu.forEach((category) => {
    const categoryText = getCategory(category);
    const itemCategory = document.createElement('p');
    itemCategory.textContent = categoryText;
    itemCategory.classList.add('item-category');

    itemCategory.addEventListener('click', () => {
        clearDisplayGrid();
        displayItems(categoryText.split(' ').join(''));
    });

    menuItemsContainer.appendChild(itemCategory);

    category.forEach((menuItem) => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');
        itemContainer.classList.add(categoryText.split(' ').join(''));

        itemContainer.addEventListener('click', () => {
            clearDisplayGrid();
            displayItems(itemContainer.classList[1]);
        });

        const item = document.createElement('p');
        item.textContent = menuItem.split(' - ')[0];
        item.classList.add('menu-item');
        item.id = item.textContent.split(' ').join('');

        const price = document.createElement('p');
        price.textContent = menuItem.split(' - ')[1];
        price.classList.add('item-price');

        itemContainer.appendChild(item);
        itemContainer.appendChild(price);
        menuItemsContainer.appendChild(itemContainer);
    })
});

function clearDisplayGrid() {
    menuDisplayContainer.innerHTML = '';
}

function createItemCard(item, categoryIndex, itemIndex) {
    const itemCard = document.createElement('div');
    const itemImage = new Image();
    const itemName = document.createElement('p');
    const itemPrice = document.createElement('p');
    const addOrderBtn = document.createElement('button');
    const viewDietInfoBtn = document.createElement('button');

    itemCard.classList.add('item-card');
    itemImage.src = displayImages[categoryIndex][itemIndex];
    itemName.textContent = item.split(' - ')[0];
    itemPrice.textContent = item.split(' - ')[1];
    addOrderBtn.textContent = 'Add To Order';
    viewDietInfoBtn.textContent = 'View Dietry Information';

    itemCard.appendChild(itemImage);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(addOrderBtn);
    itemCard.appendChild(viewDietInfoBtn);
    return itemCard;
}

function displayItems(category) {
    if (category === 'Appetizers')
    {
        menu[0].forEach((item, index) => {
            menuDisplayContainer.appendChild(createItemCard(item, 0, index));  
        }); 
    } 
    else if (category === 'Dishes') 
    {
        menu[1].forEach((item, index) => {
            menuDisplayContainer.appendChild(createItemCard(item, 1, index));  
        }); 
    } 
    else if (category === 'FriedNoodles') 
    {
        menu[2].forEach((item, index) => {
            menuDisplayContainer.appendChild(createItemCard(item, 2, index));  
        });
    } 
    else if (category === 'Drinks') 
    {
        menu[3].forEach((item, index) => {
            menuDisplayContainer.appendChild(createItemCard(item, 3, index));  
        });
    }
}

content.appendChild(menuItemsContainer);
content.appendChild(menuDisplayContainer);

main.appendChild(createHeader());
main.appendChild(createNavigation('menu'));
main.appendChild(content);
main.appendChild(createFooter());
document.body.appendChild(main);

displayItems('Appetizers');