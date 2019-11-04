IWAJOO = {
	common: {
		init: function() {
			console.log("Application Wide!");
		} 
	},home: {
		init: function() {
			// controller-wide code 
			console.log("User Actions!");
		}, loadexplore: function() {
			console.log("Explore Loaded!");
		}, testbehaviour: function() {
			console.log("Test behaviour!");
		}
	}
};
UTIL = {
	exec: function( controller, action ) {
		var ns = IWAJOO, action = ( action === undefined ) ? "init" : action;
		if ( controller !== "" && ns[controller] && typeof ns[controller][action] == "function" ) {
			ns[controller][action]();
		}
	}, init: function() {
		var body = document.body, controller = body.getAttribute( "data-contain" ), actions = body.getAttribute( "data-behaviours" );
		UTIL.exec( "common" );
		UTIL.exec( controller );
		$.each(actions.split(/\s+/),function(i,action){
			UTIL.exec( controller, action );
		});
	}
};
$( document ).ready( UTIL.init );