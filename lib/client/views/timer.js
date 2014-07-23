var TimerView = function(app) {
	return {
		app: app,

		totalMs: null,
		startTime: null,

		timerId: null,

		start: function(data) {
			this.totalMs = data.totalMs;
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
			this.app.container.text(Math.round((this.totalMs - (new Date).getTime() + this.startTime) / 1000));
		}

	};
};