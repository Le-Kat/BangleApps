(() => {
	
	WIDGETS["mywidget"]={
		area:"tl",
		width: 24,
		draw:function() {
			g.reset().drawImage (
				atob ("GBiBAAAAAAAAPASSfgSSDgSSBgSSBgSTBATZgAZMwAJmfAMzAAEZgAGM/ADGAABjgAAw/AAcAAAHAAAB/AAAAAAAAAAAAAAAAAAAAA=="),
				this.x,
				this.y
			);
		}
	};
})()
