module.exports = function(options) {
	var Clock = require('./views/clock.js');
	var Timer = require('./views/timer.js');

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
		timerView: null,

		initialize: function() {
			this.clockView = Clock(this);
			this.timerView = Timer(this);
			this.displayClock();
		},

		stopCurrentView: function() {
			if(this.currentView) {
				this.currentView.stop();
			}
		},

		displayClock: function(data) {
			this.stopCurrentView();
			this.currentViewName = 'clock';
			this.currentView = this.clockView;
			this.clockView.start(data);
		},

		displayTimer: function(data) {
			this.stopCurrentView();
			this.currentViewName = 'timer';
			this.currentView = this.timerView;
			this.timerView.start(data);
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