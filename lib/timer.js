module.exports = function(options) {
	return {
		/**
		 * @var Array
		 */
		options: options,

		/**
		 * @var string 'clock'
		 */
		currentView: 'clock',

		setView: function(viewName) {
			this.currentView = viewName;
		},

		/**
		 * @todo Could be faked to return the date of a client to avoid time offsets
		 * @returns {Date}
		 */
		getTime: function() {
			return new Date();
		},

		displayData: function() {
			return {
				currentView: this.currentView,
				currentTime: this.getTime()
			}
		}
	}
};