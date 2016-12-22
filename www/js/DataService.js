angular.module("starter")

.service("DataService", function() {

	this.get_cities = function(){
		var cities = [
			{ id: 1, name: 'Coimbatore', state: 'tamilnadu' },
			{ id: 2, name: 'Tirupur', state: 'tamilnadu' },
			{ id: 3, name: 'Erode', state: 'tamilnadu' }
		];
		return cities;
	}

	this.get_location = function(city){
		var location = {
			'1': [
				{ id: 1, name: 'RS Puram', city: 'Coimbatore', state: 'tamilnadu', position: [11.0082013,76.9428007]},
				{ id: 2, name: 'Peelamedu', city: 'Coimbatore', state: 'tamilnadu', position: [11.0322025,76.985283]}
			],
			'2': [
				{ id: 3, name: 'Avinashi', city: 'Tirupur', state: 'tamilnadu' },
				{ id: 4, name: 'Kunnathur', city: 'Tirupur', state: 'tamilnadu' }
			],
			'3': [
				{ id: 5, name: 'Gopi', city: 'Erode', state: 'tamilnadu' },
				{ id: 6, name: 'sathyamangalam', city: 'Erode', state: 'tamilnadu' }
			]
		};

		return location[city];
	}

});