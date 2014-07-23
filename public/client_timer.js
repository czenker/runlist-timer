var ClientTimer = function(container, options) {

	return {
		container: container,
		options: options,

		currentTime: null,

		/**
		 * used to increase the current time
		 * @var intervalId
		 */
		clockTimerId: null,

		display: function(data) {
			if(data.currentView == 'clock') {
				this.displayClock(data);
			}
		},

		displayClock: function(data) {
			this.currentTime = new Date(data.currentTime);
			if(this.clockTimerId) {
				clearInterval(this.clockTimerId);
			}

			this.clockTimerId = setInterval(function() {
				this.currentTime.setUTCMilliseconds(this.currentTime.getUTCMilliseconds() + 1000);

				this.container.innerText = this.currentTime.getHours() + ':' + this.currentTime.getMinutes() + ':' + this.currentTime.getSeconds();
			}.bind(this), 1000);

		}

	}
};