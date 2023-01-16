import clock from "./assets/clock.svg"
import location from "./assets/location.svg"

export default function home() {
    const container = document.querySelector('#content'); 

    const h1 = document.createElement('h1');
    h1.innerText = 'KINRO SUSHI'
    container.appendChild(h1);

    const nav = document.createElement('div');
    nav.setAttribute('id', 'nav-container')
    container.appendChild(nav);
    
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');
    
    home.style.textDecoration = 'underline salmon';
    home.setAttribute('id', 'home');
    menu.setAttribute('id', 'menu');
    contact.setAttribute('id', 'contact');
    
    home.innerText = 'HOME';
    menu.innerText = 'MENU';
    contact.innerText = 'CONTACT';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    const greatest = document.createElement('div')
    greatest.innerText = "WORLD'S GREATEST SUSHI"
    greatest.setAttribute('id', 'greatest');
    container.appendChild(greatest);

    const homeInfo = document.createElement('div')
    homeInfo.setAttribute('id', 'home-info')
    container.appendChild(homeInfo);

    const homeLeft = document.createElement('div');
    const homeRight = document.createElement('div');

    homeInfo.appendChild(homeLeft);
    homeInfo.appendChild(homeRight);

    const homeClock = document.createElement('img');
    const homeLocation = document.createElement('img');
    homeClock.src = clock
    homeLocation.src = location

    const firstLeft = document.createElement('div');
    const secondLeft = document.createElement('div');
    const firstRight = document.createElement('div');
    const secondRight = document.createElement('div');

    firstLeft.innerText = 'Mon-Thur: 11am-9pm'
    secondLeft.innerText = 'Fri-Sun: 11am-12am';
    firstRight.innerText = '857 Beacon Street';
    secondRight.innerText = 'Boston, MA 02108';

    homeLeft.appendChild(homeClock);
    homeLeft.appendChild(firstLeft);
    homeLeft.appendChild(secondLeft);

    homeRight.appendChild(homeLocation);
    homeRight.appendChild(firstRight);
    homeRight.appendChild(secondRight);

    const homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'home-button');
    homeButton.innerText = 'View Menu'

    container.appendChild(homeButton);
}
