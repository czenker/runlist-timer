var ClockView = function(app) {
	return {
		app: app,

		startTimestamp: null,
		startTime: null,

		timerId: null,

		start: function(data) {
			this.startTimestamp = data.startTimestamp;
			this.startTime = (new Date).getTime();

			this.timerId = setInterval(function() {
				this.draw();
			}.bind(this), 100);
		},

		stop: function() {
			if(this.timerId) {
				clearInterval(this.timerId);
			}
		},

		draw: function() {
			var currentTimestamp = this.startTimestamp + (new Date).getTime() - this.startTime;
			var now = new Date(currentTimestamp);
			this.app.container.text(now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds());
		}

	};
};