
require('../scss/index.scss');

const navbar = require('../components/navbar.handlebars');
const content = require('../components/content.handlebars');

document.addEventListener('DOMContentLoaded', () => {
	document.body.innerHTML = navbar();
	document.body.innerHTML += content();
});