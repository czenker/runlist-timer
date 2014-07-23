module.exports = function(app) {
	return {
		app: app,

		totalMs: null,
		startTime: null,

		start: function(data) {
			this.totalMs = parseInt(data.totalMs, 10);
			this.startTime = (new Date).getTime();
		},

		status: function() {
			return {
				totalMs: this.totalMs - (new Date).getTime() + this.startTime
			}
		},

		stop: function() {}
	}
};