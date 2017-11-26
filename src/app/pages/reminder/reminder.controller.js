(function () {
	'use strict';

	angular
	.module('angular')
	.controller('ReminderController', ReminderController);

	/** @ngInject */
	function ReminderController(reminder, moment, $filter) {
		var vm = this;

		vm.today = new Date().getTime();

		vm.is_open = false;
		
		vm.showDateTimePicker = function () {
			vm.is_open = true;
		}

		vm.getListLog = function(time) {
			var listLog = {
				Month: time.getMonth() + 1,
				Year: time.getFullYear()
			}
			reminder.listConsultationLog(listLog, function(res) {
				console.log(res);
			})
		}
		
	}
})();