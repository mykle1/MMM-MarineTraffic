/* Magic Mirror
 * Module: MMM-MarineTraffic
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-MarineTraffic",{

	defaults: {
			height:"650px",
			width:"650px",
            animationSpeed: "0",
            updateInterval: 60 * 60 * 1000,
	},

    start: function () {
		self = this;

    setInterval(function() {
    self.updateDom(self.config.animationSpeed || 0);
    }, this.config.updateInterval);

	},

	getStyles: function() {
        return ["MMM-MarineTraffic.css"];
    },

	getDom: function() {

		var getTimeStamp = new Date().getTime(); // to seed url so Dom/module refreshes

		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border: 0 none transparent";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
	//	type="text/javascript";
	

////////////////////// Code below copied from https://www.marinetraffic.com ////////

  iframe.srcdoc= `<script type="text/javascript">
	width='100%';		// the width of the embedded map in pixels or percentage
	height='450';		// the height of the embedded map in pixels or percentage
	border='0';		// the width of the border around the map (zero means no border)
	showmenu= 'false';
	shownames='true';	// to display ship names on the map (true or false)
	latitude='40.574794';	// the latitude of the center of the map, in decimal degrees
	longitude='-74.112454';	// the longitude of the center of the map, in decimal degrees
	zoom='12';		// the zoom level of the map (values between 2 and 17)
	maptype='1';		// use 0 for Normal Map, 1 for Satellite
	trackvessel='0';	// MMSI of a vessel (note: vessel will be displayed only if within range of the system) - overrides "zoom" option
	fleet='';		// the registered email address of a user-defined fleet (user's default fleet is used)
  </script>

  <script type="text/javascript" src="//www.marinetraffic.com/js/embed.js"></script>`+ getTimeStamp;

		return iframe;
	},

});
