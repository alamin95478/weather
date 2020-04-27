class UI {
	constructor(){
		this.city = document.getElementById('city');
		this.country = document.getElementById('country');
		this.temp = document.getElementById('temp');
		this.weatherIcon = document.getElementById('weatherIcon');
		this.precipitation = document.getElementById('precipitation');
		this.humidity = document.getElementById('humidity');
		this.wind = document.getElementById('wind');
	}
	print(weather){
		this.city.textContent = weather.name;
		this.country.textContent = weather.weather[0].discription;
		this.temp.textContent = Math.floor(weather.main.temp-273.15)+' °C';
		this.weatherIcon.src= `http://api.openweathermap.org/img/w/${weather.weather[0].icon}.png`;
		this.precipitation.textContent = "Pressure : "+weather.main.pressure +'%';
		this.humidity.textContent = "Humidity: " + weather.main.humidity+"%";
		this.wind.textContent = "Wind :" + weather.wind.speed +"km/h";
	}
	notFound(){
		this.city.textContent = 'Not Found';
		this.country.textContent = "";
		this.temp.textContent = '';
		this.weatherIcon.src= '';
		this.precipitation.textContent = '';
		this.humidity.textContent = '';
		this.wind.textContent = '';
	}
}