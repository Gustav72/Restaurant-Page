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
    
    home.style.textDecoration = 'underline orange';
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










}
