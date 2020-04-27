class Weather{
	constructor(city) {
		this.city = city ; 
		this.appid = '9e6a7c8a9079da8f69c3995158642ce2';
	}	
	
	//fetch weather info from API
	async getWeather(){
		// const responsData=await(await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`)).json();
		const responsData=await(await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`)).json();

		return responsData;
	}
}