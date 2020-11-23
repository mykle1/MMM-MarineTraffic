/* Magic Mirror
 * Module: MMM-MarineTraffic
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-MarineTraffic",{

	defaults: {

      animationSpeed: "0",
      updateInterval: 60 * 60 * 1000,
      latitude:40.574794,
      longitude:-74.112454,
      zoom:12,
      maptype:1,
      vesseltotrack:0,
      fleet:'',
      showmenu:false,
      shownames:false,
      border:0,
	},
		iheight:"1000",
		iwidth:"100%",
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
		var wrapper=document.createElement("DIV");

		var iframe = document.createElement("IFRAME");
		wrapper.appendChild(iframe)
		//iframe.classList.add("iframe");
		//iframe.style = "border: 0 none transparent";
		// if the width  is in percent use it, otherwise just use the number (strip off px, em, ...)
		this.iwidth=iframe.style.width=wrapper.style.width = this.iwidth=this.config.width.includes('%')?this.config.width:parseInt(this.config.width)+'px';
		// the internal iframe width is assumed to be pixels, the px doesn't help
		if(this.iwidth.endsWith('px')){
			// remove px if found
			this.iwidth=parseInt(this.iwidth.slice(0,-2))-20

		}
		// height just use the number and add px, regardless how the user specified  (% is not good for height as the regions are smallish)
		iframe.style.height=wrapper.style.height = parseInt(this.config.height)+'px';
		this.iheight=parseInt(this.config.height)-20;  // remove the lower border size to elimminate the vertical scroll bar

	//	type="text/javascript";


////////////////////// Code below copied from https://www.marinetraffic.com ////////

  iframe.srcdoc="<script type=\"text/javascript\">"+
	"border='"+this.config.border+"';"+		// the width of the border around the map (zero means no border)
	"showmenu='"+this.config.showmenu+"';"+
	"shownames='"+this.config.shownames+"';"+	// to display ship names on the map (true or false)
	"latitude='"+this.config.latitude+"';"+	// the latitude of the center of the map, in decimal degrees
	"longitude='"+this.config.longitude+"';"+	// the longitude of the center of the map, in decimal degrees
	"zoom='"+this.config.zoom+"';"+	// the zoom level of the map (values between 2 and 17)
	"maptype='"+this.config.maptype+"';"+		// use 0 for Normal Map, 1 for Satellite
	"trackvessel='"+this.config.vesseltotrack+"';"+	// MMSI of a vessel (note: vessel will be displayed only if within range of the system) - overrides "zoom" option
	"fleet='"+this.config.fleet+"';"+			// the registered email address of a user-defined fleet (user's default fleet is used)
	"width=\""+this.iwidth+"\";"+		// the width of the embedded map in pixels or percentage
  "height=\""+this.iheight+"\";"+		// the height of the embedded map in pixels or percentage
  "</script>"+
  "<script type=\"text/javascript\" src=\"https://www.marinetraffic.com/js/embed.js?time="+getTimeStamp+"\"></script>"

		return wrapper;
	},

});
