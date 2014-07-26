
var keyMapping = {
	
	',': {
		title: 'Previous Property',
		icon: '>key',
		action: function(e) {
			window.location.href = $('.prev.h7').attr('href');
		}
	},

	'.': {
		title: 'Next Property',
		icon: 'periodkey',
		action: function(e) {
			window.location.href = $('.next.h7').attr('href');
		}
	},

	'h': {
		title: 'Home Details',
		icon: 'hkey',
		action: function(e) {
			$('a[href=#homeDetails]')[0].click();
		}
	},

	'n': {
		title: 'Neighborhood Info',
		icon: 'nkey',
		action: function(e) {
			$('a[href=#neighborhoodInfo]')[0].click();
		}
	},

	'm': {
		title: 'Affordability',
		icon: 'mkey',
		action: function(e) {
			$('a[href=#affordability]')[0].click();
		}
	},

	'p': {
		title: 'Price History',
		icon: 'pkey',
		action: function(e) {
			$('a[href=#priceHistory]')[0].click();
		}
	},

	'1': {
		title: 'Photo View',
		icon: '1key',
		action: function(e) {
			$('.viewPhotoLink')[0].click();
		}
	},

	'2': {
		title: 'Street View',
		icon: '2key',
		action: function(e) {
			$('.viewStreetViewMapLink')[0].click();
		}
	},

	'3': {
		title: 'Map View',
		icon: '3key',
		action: function(e) {
			$('.viewMapLink')[0].click();
		}
	},

	'c': {
		title: 'Crime Map',
		icon: 'ckey',
		action: function(e) {
			$('#lc_info_crime').trigger('click');
		}
	},

	'a': {
		title: 'Amneties',
		icon: 'akey',
		action: function(e) {
			$('#lc_info_amenities').trigger('click');
		}
	},

	't': {
		title: 'Transit',
		icon: 'tkey',
		action: function(e) {
			$('#lc_info_transit').trigger('click');
		}
	},

	's': {
		title: 'Save',
		icon: 'skey',
		action: function(e) {
			$('.property_action_follow').trigger('click');
		}
	}
};