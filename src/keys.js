
var keyMapping = {
	
	',': {
		title: 'Previous Property',
		icon: 'commakey',
		action: function(e) {
			window.location.href = $('.prev.h7').attr('href');
		},
		requirement: function() {
			if ($('.prev.h7').attr('href')) {
				return true;
			} else {
				return false;
			}
		}
	},

	'.': {
		title: 'Next Property',
		icon: 'periodkey',
		action: function(e) {
			window.location.href = $('.next.h7').attr('href');
		},
		requirement: function() {
			if ($('.next.h7').attr('href')) {
				return true;
			} else {
				return false;
			}
		}
	},

	'esc': {
		title: 'Back to Search',
		icon: 'esckey',
		action: function(e) {
			window.location.href = $('a.h7:not(.next,.prev):first').attr('href');
		},
		requirement: function() {
			if ($('.modal').is(':visible')) {
				return false;
			} else {
				return true;
			}
		}
	},

	'h': {
		title: 'Home Details',
		icon: 'hkey',
		action: function(e) {
			$('a[href=#homeDetails]')[0].click();
		},
		requirement: function() {
			return true;
		}
	},

	'n': {
		title: 'Neighborhood Info',
		icon: 'nkey',
		action: function(e) {
			$('a[href=#neighborhoodInfo]')[0].click();
		},
		requirement: function() {
			return true;
		}
	},

	'm': {
		title: 'Affordability',
		icon: 'mkey',
		action: function(e) {
			$('a[href=#affordability]')[0].click();
		},
		requirement: function() {
			return true;
		}
	},

	'p': {
		title: 'Price History',
		icon: 'pkey',
		action: function(e) {
			$('a[href=#priceHistory]')[0].click();
		},
		requirement: function() {
			return true;
		}
	},

	'1': {
		title: 'Photo View',
		icon: '1key',
		action: function(e) {
			$('.viewPhotoLink')[0].click();
		},
		requirement: function() {
			return true;
		}
	},

	'2': {
		title: 'Street View',
		icon: '2key',
		action: function(e) {
			$('.viewStreetViewMapLink')[0].click();
		},
		requirement: function() {
			return true;
		}
	},

	'3': {
		title: 'Map View',
		icon: '3key',
		action: function(e) {
			$('.viewMapLink')[0].click();
		},
		requirement: function() {
			return true;
		}
	},

	'c': {
		title: 'Crime Map',
		icon: 'ckey',
		action: function(e) {
			$('#lc_info_crime').trigger('click');
		},
		requirement: function() {
			return true;
		}
	},

	'a': {
		title: 'Amneties',
		icon: 'akey',
		action: function(e) {
			$('#lc_info_amenities').trigger('click');
		},
		requirement: function() {
			return true;
		}
	},

	't': {
		title: 'Transit',
		icon: 'tkey',
		action: function(e) {
			$('#lc_info_transit').trigger('click');
		},
		requirement: function() {
			return true;
		}
	},

	's': {
		title: 'Save',
		icon: 'skey',
		action: function(e) {
			$('.property_action_follow').trigger('click');
		},
		requirement: function() {
			return true;
		}
	}
};