
require('../scss/index.scss');

const navbar = require('../components/navbar.handlebars');
const content = require('../components/content.handlebars');

document.addEventListener('DOMContentLoaded', () => {
	document.body.innerHTML = navbar();
	document.body.innerHTML += content({
		title: 'Contenido',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat reprehenderit error rem quis? Tempora quidem obcaecati facilis earum mollitia ad, sed labore veniam, itaque corrupti aliquam, enim nulla impedit nam?'
	});
});
