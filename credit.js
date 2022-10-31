document.addEventListener('DOMContentLoaded', (e) => {
	e.preventDefault();
	const backtest = document.querySelector('#backtest');
	const live = document.querySelector('#live');
	const broker = document.querySelector('#broker');
	const free = document.querySelector('#free');
	const history = document.querySelector('#history');
	const display = document.querySelector('#display');
	const friends = document.querySelector('#friends');
	const wallet = document.querySelector('#wallet');
	document.querySelector('#live').addEventListener('click', (e) => {
		e.preventDefault();
		live.classList.add('active');
		backtest.classList.remove('active');
		broker.classList.remove('active');
		free.classList.remove('active');
		display.classList.add('active-icon');
		history.classList.remove('active-icon');
		friends.classList.remove('active-icon');
		wallet.classList.remove('active-icon');
	});

	document.querySelector('#backtest').addEventListener('click', (e) => {
		e.preventDefault();
		backtest.classList.add('active');
		live.classList.remove('active');
		broker.classList.remove('active');
		free.classList.remove('active');
		display.classList.remove('active-icon');
		history.classList.add('active-icon');
		friends.classList.remove('active-icon');
		wallet.classList.remove('active-icon');
	});

	document.querySelector('#broker').addEventListener('click', (e) => {
		e.preventDefault();
		backtest.classList.remove('active');
		live.classList.remove('active');
		broker.classList.add('active');
		free.classList.remove('active');
		display.classList.remove('active-icon');
		history.classList.remove('active-icon');
		friends.classList.add('active-icon');
		wallet.classList.remove('active-icon');
	});

	document.querySelector('#free').addEventListener('click', (e) => {
		e.preventDefault();
		backtest.classList.remove('active');
		live.classList.remove('active');
		broker.classList.remove('active');
		free.classList.add('active');
		display.classList.remove('active-icon');
		history.classList.remove('active-icon');
		friends.classList.remove('active-icon');
		wallet.classList.add('active-icon');
	});
});
