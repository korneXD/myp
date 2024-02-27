import { home } from './home.js';
import { projects } from './projects.js';

const routes = {
	'': 'home.html',
	projects: 'projects.html',
	contact: 'contact.html',
	'404': '404.html'
};

window.addEventListener('hashchange', () => {
	//console.log(window.location.hash);
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
	if (url == 'home.html') home();
	else if (url == 'projects.html') projects();
}
