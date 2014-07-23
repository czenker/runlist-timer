module.exports = function(app) {
	return {
		app: app,

		total: null,
		elapsed: null,

		elapseTimerId: null,


		start: function(data) {
			this.total = parseInt(data.total, 10);
			this.elapsed = parseInt(data.elapsed, 10) || 0;

			this.elapseTimerId = setInterval(function() {
				this.elapsed += 100;
			}.bind(this), 100);
		},

		status: function() {
			return {
				total: this.total,
				elapsed: this.elapsed
			}
		},

		stop: function() {
			if(this.elapseTimerId) {
				clearInterval(this.elapseTimerId);
			}
		}
	}
};