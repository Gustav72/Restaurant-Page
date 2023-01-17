import clock from "./assets/clock.svg"
import location from "./assets/location.svg"
import phone from "./assets/phone.svg"
import email from "./assets/email.svg"
import map from "./assets/map.png"
import menuPage from './menu'
import homePage from './home'


export default function contactPage() {
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
    
    contact.style.textDecoration = 'underline salmon';
    home.setAttribute('id', 'home');
    menu.setAttribute('id', 'menu');
    contact.setAttribute('id', 'contact');
    
    home.innerText = 'HOME';
    menu.innerText = 'MENU';
    contact.innerText = 'CONTACT';

    home.addEventListener('click', function() {
      while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
      homePage();
    });
     menu.addEventListener('click', function() {
      while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
      menuPage();
    });
    contact.addEventListener('click', function() {
      while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
      contactPage();
    });

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contact-container');
    container.appendChild(contactContainer);

    const left = document.createElement('div');
    const right = document.createElement('div');

    left.setAttribute('id', 'left');
    right.setAttribute('id', 'right');

    contactContainer.appendChild(left)
    contactContainer.appendChild(right)

    const card1 = document.createElement('div')
    const card2 = document.createElement('div')
    const card3 = document.createElement('div')
    const card4 = document.createElement('div')

    left.appendChild(card1);
    left.appendChild(card2);
    left.appendChild(card3);
    left.appendChild(card4);

    const locationImg = document.createElement('img');
    const hoursImg = document.createElement('img');
    const phoneImg = document.createElement('img');
    const emailImg = document.createElement('img');

    locationImg.src = location;
    hoursImg.src = clock;
    phoneImg.src = phone;
    emailImg.src = email;

    card1.appendChild(locationImg)
    card2.appendChild(hoursImg)
    card3.appendChild(phoneImg)
    card4.appendChild(emailImg)

    const locationInfo1 = document.createElement('div')
    const locationInfo2 = document.createElement('div')
    const hoursInfo1 = document.createElement('div')
    const hoursInfo2 = document.createElement('div')
    const phoneInfo = document.createElement('div')
    const emailInfo = document.createElement('div')


    locationInfo1.innerText = '456 Beacon Street'
    locationInfo2.innerText = 'Boston, MA 02115'
    hoursInfo1.innerText = 'Mon-Thur: 11am-9pm'
    hoursInfo2.innerText = 'Fri-Sun: 11am-12am'
    phoneInfo.innerText = '(617)-222-5555'
    emailInfo.innerText = 'contact@kinrosushi.com'

    card1.appendChild(locationInfo1)
    card1.appendChild(locationInfo2)
    card2.appendChild(hoursInfo1)
    card2.appendChild(hoursInfo2)
    card3.appendChild(phoneInfo)
    card4.appendChild(emailInfo)


    const mapImg = document.createElement('img');
    mapImg.src = map;
    mapImg.setAttribute('id', 'map');
    right.appendChild(mapImg);
}