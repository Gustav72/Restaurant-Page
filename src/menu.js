export default function menu() {
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
    
    menu.style.textDecoration = 'underline salmon';
    home.setAttribute('id', 'home');
    menu.setAttribute('id', 'menu');
    contact.setAttribute('id', 'contact');
    
    home.innerText = 'HOME';
    menu.innerText = 'MENU';
    contact.innerText = 'CONTACT';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');
    container.appendChild(menuContainer);
    
    const card1 = document.createElement('div');
    const card2 = document.createElement('div');
    const card3 = document.createElement('div');
    const card4 = document.createElement('div');
    const card5 = document.createElement('div');
    const card6 = document.createElement('div');
    const card7 = document.createElement('div');
    const card8 = document.createElement('div');

    menuContainer.appendChild(card1);
    menuContainer.appendChild(card2);
    menuContainer.appendChild(card3);
    menuContainer.appendChild(card4);
    menuContainer.appendChild(card5);
    menuContainer.appendChild(card6);
    menuContainer.appendChild(card7);
    menuContainer.appendChild(card8);

    const title1 = document.createElement('h3')
    const title2 = document.createElement('h3')
    const title3 = document.createElement('h3')
    const title4 = document.createElement('h3')
    const title5 = document.createElement('h3')
    const title6 = document.createElement('h3')
    const title7 = document.createElement('h3')
    const title8 = document.createElement('h3')

    title1.innerText = 'Sunshine Roll $9'
    title2.innerText = 'Butterfly Roll $9'
    title3.innerText = 'Cowboy Roll $10'
    title4.innerText = 'Billerica Roll $9'
    title5.innerText = 'Volcano Roll $9'
    title6.innerText = 'Winter Roll $13'
    title7.innerText = 'Patriot Roll $11'
    title8.innerText = 'Crazy Roll $11'

    const text1 = document.createElement('p')
    const text2 = document.createElement('p')
    const text3 = document.createElement('p')
    const text4 = document.createElement('p')
    const text5 = document.createElement('p')
    const text6 = document.createElement('p')
    const text7 = document.createElement('p')
    const text8 = document.createElement('p')

    text1.innerText = 'Mango, cucumber, and avocado topped with spicy crab meat and mango sauce'
    text2.innerText = 'Lobster, mango, and avocado with mango wrapped with soy bean paper'
    text3.innerText = 'Shrimp tempura, cream cheese, eel, and avocado on top with spicy eel sauce'
    text4.innerText = 'Spicy tuna, yellow tail, avocado, and crunchy tobiko wrapped in soy paper'
    text5.innerText = 'Deep fried spicy tuna, crunchy onion, avocado, and special sauce'
    text6.innerText = 'Lobster, spicy white tuna, and avocado topped with super white tuna flakes'
    text7.innerText = 'Spicy tuna, spicy salmon, spicy yellow tail topped with assorted tobiko'
    text8.innerText = 'Salmon, tuna, red snapper, crab meat, all deep fried laid over scallions'

    card1.appendChild(title1);
    card1.appendChild(text1);

    card2.appendChild(title2);
    card2.appendChild(text2);

    card3.appendChild(title3);
    card3.appendChild(text3);

    card4.appendChild(title4);
    card4.appendChild(text4);

    card5.appendChild(title5);
    card5.appendChild(text5);

    card6.appendChild(title6);
    card6.appendChild(text6);

    card7.appendChild(title7);
    card7.appendChild(text7);

    card8.appendChild(title8);
    card8.appendChild(text8);
}