(() => {
	
	const SATELITES = [
		// none
		atob ("GBiBAAAAAAAAPAAAfgAATgAABgAABgAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="),
		// one
		atob ("GBiBAAAAAAAAPAACfgACTgACBgACBgADDAABgAAAwAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="),
		// two
		atob ("GBiBAAAAAAAAPAASfgASTgASBgASBgATDAAZgAAMwAAGfAADAAABgAAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="),
		// three
		atob ("GBiBAAAAAAAAPACSfgCSTgCSBgCSBgCTDADZgABMwABmfAAzAAAZgAAM/AAGAAADgAAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="),
		// four +
		atob ("GBiBAAAAAAAAPASSfgSSTgSSBgSSBgSTDATZgAZMwAJmfAMzAAEZgAGM/ADGAABjgAAw/AAcAAAHAAAB/AAAAAAAAAAAAAAAAAAAAA==")
	];
	
	function drawWidget() {
		
		var gps = Bangle.getGPSFix();
		if (gps !== undefined) {
			
			var file = require ("Storage").open ("widsat.debug.json", "a");
			file.write (gps);
			
			//require ("Storage").write ("widsat.debug.json", JSON.stringify (gps));
			var s = gps ["satellites"];
			if (s !== undefined) {
				
				var img;
				if (s == 0 || isNaN (s)) {
					
					img = SATELITES [0];
				} else if (s == 1) {
					
					img = SATELITES [1];
				} else if (s == 2) {
					
					img = SATELITES [2];
				} else if (s == 3) {
					
					img = SATELITES [3];
				} else {
					
					img = SATELITES [4];
				}
				
				g.reset().drawImage (
					img,
					this.x,
					this.y
				);
			}
		}
	}
	
	function getWidth() {
		
		var gps = Bangle.getGPSFix();
		if (gps === undefined) { return (0); }
		
		return (24);
	}
	
	Bangle.setGPSPower (true, "widget");
	
	WIDGETS["mywidget"]={
		area: "tl",
		width: getWidth(),
		draw: drawWidget
	};
})()
