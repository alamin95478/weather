// UI fetch
const ui = new UI;
//fetch city from ipApi.co
async function getCity(){
	const city = await fetch('https://ipapi.co/json');
	const data = await city.json();

	return data;
}
// console.log(getCity());

getCity().then(data => {
	//fetch weather
	const weather = new Weather(data.city);
	// console.log(data.city);
	weather.getWeather().then(data => {
		// console.log(data);
		ui.print(data);
	}).catch(err => {
		console.log(err);
		ui.notFound();
	});
})

document.getElementById('search').addEventListener('click', () => {
	if(city === ''){
		alert('You must select a valid city name.');
	}else{
		const city = document.getElementById('stateSelect').value;
		//fetch weather
		const weather = new Weather(city);
		weather.getWeather().then(data => {
			ui.print(data);
		}).catch(err => {
			ui.notFound();
		});
	};
})