
var tooltipMapping = {

	'esc': {
		position: 'bottom',
		content: "Or press the 'esc' key",
		selector: 'a.h7:not(.next,.prev):first'
	},

	'.': {
		position: 'bottom',
		content: "Or press the 'period (>)' key",
		selector: '.next.h7'
	},

	',': {
		position: 'bottom',
		content: "Or press the 'comma (<)' key",
		selector: '.prev.h7'
	},

	's': {
		position: 'left',
		content: "Or press the 'S' key",
		selector: '.property_action_follow'
	},

	'1': {
		position: 'top',
		content: "Or press the '1 (!)' key",
		selector: '.viewPhotoLink img'
	},

	'2': {
		position: 'top',
		content: "Or press the '2 (@)' key",
		selector: '.viewStreetViewMapLink img'
	},

	'3': {
		position: 'top',
		content: "Or press the '3 (#)' key",
		selector: '.viewMapLink img'
	},

	'h': {
		position: 'bottom',
		content: "Or press the 'H' key",
		selector: 'a[href=#homeDetails]'
	},

	'n': {
		position: 'bottom',
		content: "Or press the 'N' key",
		selector: 'a[href=#neighborhoodInfo]'
	},

	'm': {
		position: 'bottom',
		content: "Or press the 'M' key",
		selector: 'a[href=#affordability]'
	},

	'p': {
		position: 'bottom',
		content: "Or press the 'P' key",
		selector: 'a[href=#priceHistory]'
	},

	'c': {
		position: 'top',
		content: "Or press the 'C' key",
		selector: '#lc_info_crime'
	},

	'a': {
		position: 'top',
		content: "Or press the 'A' key",
		selector: '#lc_info_amenities'
	},

	't': {
		position: 'top',
		content: "Or press the 'T' key",
		selector: '#lc_info_transit'
	}

};