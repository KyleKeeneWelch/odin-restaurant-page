import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/brands';

export function createMain() {
    const main = document.createElement('main');
    main.classList.add('main-container');

    return main;
}

export function createContent() {
    const content = document.createElement('div');
    content.classList.add('content');

    return content;
}

export function createFooter() {
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    const footerLink = document.createElement('a');
    const footerIcon = document.createElement('i');

    footerText.textContent = 'Kyle Keene-Welch © 2023';
    footerLink.href = "https://github.com/KyleKeeneWelch";
    footerIcon.classList.add('fa-brands');
    footerIcon.classList.add('fa-github');
    footerIcon.ariaHidden = 'true';

    footerLink.appendChild(footerIcon);
    footer.appendChild(footerText);
    footer.appendChild(footerLink);

    return footer;
}

export function createHeader() {
    const header = document.createElement('header');
    const headerTextContainer = document.createElement('a');
    const headerText = document.createElement('h1');
    const headerSubText = document.createElement('h2');

    headerTextContainer.classList.add('header-text-container');
    headerTextContainer.href = './index.html';
    headerText.textContent = 'Sorato';
    headerSubText.textContent = 'Authentic Japanese Cuisine';

    headerTextContainer.appendChild(headerText);
    header.appendChild(headerTextContainer);
    header.appendChild(headerSubText);

    return header;
}

export function createNavigation(active) {
    const navigation = document.createElement('nav');
    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contactLink = document.createElement('a');

    navigation.classList.add('navigation');
    homeLink.href = './index.html';
    menuLink.href = './menu.html';
    contactLink.href = './contact.html';
    homeLink.textContent = 'Home';
    menuLink.textContent = 'Menu';
    contactLink.textContent = 'Contact';

    if (active == 'home') {
        homeLink.classList.add('active');
    }
    else if (active == 'menu') {
        menuLink.classList.add('active');
    }
    else if (active == 'contact') {
        contactLink.classList.add('active');
    }

    navigation.appendChild(homeLink);
    navigation.appendChild(menuLink);
    navigation.appendChild(contactLink);

    return navigation;
}