import { contact } from './contact.js';
import { home } from './home.js';

const routes = {
	'': 'home.html',
    contact: 'contact.html',
};

window.addEventListener('hashchange', () => {
	navigate();
});
navigate();

function navigate() {
	let hash = window.location.hash.substring(2);
	console.log(hash);
	let page = routes[hash];
	loadPage(page, document.querySelector('main'));
}

async function loadPage(url, domObj) {
	const response = await fetch(url);
	const html = await response.text();
	domObj.innerHTML = html;
	if (url == 'contact.html') contact();
	else if (url == 'home.html') home();
}
