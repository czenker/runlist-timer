module.exports = function(options) {
	var Clock = require('./views/clock.js');

	var foo = {
		/**
		 * @var Array
		 */
		options: options,

		/**
		 * @var string 'clock', 'timer'
		 */
		currentViewName: null,

		currentView: null,

		clockView: null,

		initialize: function() {
			this.clockView = Clock(this);
			this.displayClock();
		},

		displayClock: function(data) {
			this.currentViewName = 'clock';
			this.currentView = this.clockView;
			this.clockView.start();
		},

		getData: function() {
			return {
				currentView: this.currentViewName,
				data: this.currentView.status()
			}
		}
	};

	foo.initialize();

	return foo;
};