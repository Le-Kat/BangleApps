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
	
	WIDGETS["mywidget"]={
		area:"tl",
		width: Bangle.isGPSOn() ? 24 : 0,
		draw:function() {
			
			var gps = Bangle.getGPSFix();
			if (gps !== undefined) {
				
				var s = gps ["satellites"];
				if (s !== undefined) {
					
					var img;
					if (s == 0) {
						
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
	};
})()
