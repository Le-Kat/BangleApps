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
		g.reset(); // reset the graphics context to defaults (color/font/etc)
		g.setFont("6x8");
		if ((getTime() - lastTimeSet) <= 60) {
			// time is uptodate
			g.setColor('#00ff00'); // green
		}
		g.drawString("auto", this.x, this.y);
		g.drawString("time", this.x, this.y+10);
	}
	
	// add your widget
	WIDGETS ["widsat"] = {
		area:"tl", // tl (top left), tr (top right), bl (bottom left), br (bottom right)
		width: Bangle.isGPSOn() ? 42 : 0, // width of the widget
		draw: drawWidget 
	};
	
	Bangle.on('GPS',function(fix) {
		if (fix.fix && fix.time) {
			var curTime = fix.time.getTime()/1000;
			setTime(curTime);
			lastTimeSet = curTime;
			
			WIDGETS["gpsAutoTime"].draw(WIDGETS["gpsAutoTime"]);
		}
	});
	
	setInterval(function() {
		WIDGETS["gpsAutoTime"].draw(WIDGETS["gpsAutoTime"]);
	}, 1*60000); // update every minute
})();
