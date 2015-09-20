
(function($, DataTables){

$.extend( true, DataTables.Buttons.defaults, {
	dom: {
		container: {
			tag: 'ul',
			className: 'dt-buttons button-group stack-for-small'
		},
		buttonContainer: {
			tag: 'li',
			className: ''
		},
		button: {
			tag: 'a',
			className: 'button tiny radius'
		},
		buttonLiner: {
			tag: null
		},
		collection: {
			tag: 'ul',
			className: 'dt-button-collection f-dropdown open',
			button: {
				tag: 'a',
				className: 'tiny radius'
			}
		}
	}
} );

DataTables.ext.buttons.collection.className = 'buttons-collection dropdown';

})(jQuery, jQuery.fn.dataTable);
