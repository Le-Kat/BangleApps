(() => {
	
	/*
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
	*/
	
	function drawWidget() {
		g.reset(); // reset the graphics context to defaults (color/font/etc)
		g.setFont("6x8");
		let gps = Bangle.getGpsFix();
		
		if (gps !== undefined) {
			
			g.drawString (gps ["satelites"], this.x, this.y);
		} else {
			
			g.drawString (gps, this.x, this.y);
		}
		
	}
	
	// add your widget
	WIDGETS ["widsat"] = {
		area:"tl", // tl (top left), tr (top right), bl (bottom left), br (bottom right)
		width: Bangle.isGPSOn() ? 176 : 0, // width of the widget
		draw: drawWidget 
	};
	
	Bangle.on('GPS',function(fix) {
		if (fix.fix && fix.time) {
			var curTime = fix.time.getTime()/1000;
			setTime(curTime);
			
			WIDGETS["gpsAutoTime"].draw(WIDGETS["gpsAutoTime"]);
		}
	});
	
	setInterval(function() {
		WIDGETS["gpsAutoTime"].draw(WIDGETS["gpsAutoTime"]);
	}, 1*60000); // update every minute
})();
