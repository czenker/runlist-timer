var ClockView = function(app) {
	return {
		app: app,

		currentTime: null,

		/**
		 * used to increase the current time
		 * @var intervalId
		 */
		clockTimerId: null,

		start: function(data) {
			this.currentTime = new Date(data.time);
			this.stop();

			this.clockTimerId = setInterval(function() {
				this.currentTime.setUTCMilliseconds(this.currentTime.getUTCMilliseconds() + 100);
				this.draw();
			}.bind(this), 100);
		},

		stop: function(data) {
			if(this.clockTimerId) {
				clearInterval(this.clockTimerId);
			}
		},

		draw: function() {
			this.app.container.text(this.currentTime.getHours() + ':' + this.currentTime.getMinutes() + ':' + this.currentTime.getSeconds());
		}

	};
};