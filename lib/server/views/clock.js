module.exports = function(app) {
	return {
		app: app,

		start: function(data) {

		},

		status: function() {
			return {
				time: this.getTime()
			}
		},

		/**
		 * @todo Could be faked to return the date of a client to avoid time offsets
		 * @returns {Date}
		 */
		getTime: function() {
			return new Date();
		}
	}
};