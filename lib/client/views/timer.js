var TimerView = function(app) {
	return {
		app: app,

		total: null,
		elapsed: null,

		elapseTimerId: null,

		start: function(data) {
			console.log(data);
			this.total = data.total;
			this.elapsed = data.elapsed;

			this.elapseTimerId = setInterval(function() {
				this.elapsed += 100;
				this.draw();
			}.bind(this), 100);
		},

		stop: function() {
			if(this.elapseTimerId) {
				clearInterval(this.elapseTimerId);
			}
		},

		draw: function() {
			this.app.container.innerText = (this.total - this.elapsed) / 1000;
		}

	};
};