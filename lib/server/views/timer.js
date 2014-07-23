module.exports = function(app) {
	return {
		app: app,

		totalMs: null,
		startTime: null,

		elapseTimerId: null,

		start: function(data) {
			console.log(parseInt(data.totalMs, 10));
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