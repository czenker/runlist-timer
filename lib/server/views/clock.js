// displaying a clock
module.exports = function(app) {
	return {
		app: app,

		startTimestamp: null,
		startTime: null,

		start: function(data) {
			this.startTimestamp = data.startTimestamp;
			this.startTime = (new Date).getTime();
		},

		status: function() {
			return {
				startTimestamp: this.startTimestamp + (new Date).getTime() - this.startTime
			}
		},

		stop: function() {},

		/**
		 * @todo Could be faked to return the date of a client to avoid time offsets
		 * @returns {Date}
		 */
		getTime: function() {
			return new Date();
		}
	}
};