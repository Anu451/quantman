const marketplace = document.querySelector('#market');
const deployed = document.querySelector('#deployed');
const option = document.querySelector('#option');
const indicator = document.querySelector('#indicator');

document.querySelector('#market').addEventListener('click', (e) => {
	marketplace.classList.add('tab-active');
	deployed.classList.remove('tab-active');
	option.classList.remove('tab-active');
	indicator.classList.remove('tab-active');
});

document.querySelector('#deployed').addEventListener('click', (e) => {
	marketplace.classList.remove('tab-active');
	deployed.classList.add('tab-active');
	option.classList.remove('tab-active');
	indicator.classList.remove('tab-active');
});

document.querySelector('#option').addEventListener('click', (e) => {
	marketplace.classList.remove('tab-active');
	deployed.classList.remove('tab-active');
	option.classList.add('tab-active');
	indicator.classList.remove('tab-active');
});

document.querySelector('#indicator').addEventListener('click', (e) => {
	marketplace.classList.remove('tab-active');
	deployed.classList.remove('tab-active');
	option.classList.remove('tab-active');
	indicator.classList.add('tab-active');
});
