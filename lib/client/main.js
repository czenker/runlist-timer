var ClientController = function(container, options) {
	var defaultOptions = {
	};

	var foo = {
		container: container,
		options: $.extend(defaultOptions, options),

		currentViewName: null,
		currentView: null,

		clockView: null,

		initialize: function() {
			this.clockView = ClockView(this);
		},

		display: function(data) {
			if(this.currentView) {
				this.currentView.stop();
				this.currentView = this.currentViewName = null;
			}

			if(data.currentView == 'clock') {
				this.displayClock(data.data);
			}
		},

		displayClock: function(data) {
			this.currentViewName = 'clock';
			this.currentView = this.clockView;
			this.clockView.start(data);
		}
	};

	foo.initialize();

	return foo;
};