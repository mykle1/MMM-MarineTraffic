## MMM-MarineTraffic

* Under construction

description

## Some headline

More text

## Examples
Pictures to be taken.

![](images/1.png) ![](images/2.png)

## Installation

* `git clone https://github.com/mykle1/MMM-MarineWeather` into the `~/MagicMirror/modules` directory.

## Config.js entry and options
```
{
    disabled: false,
    module: 'MMM-MarineTraffic',
    position: 'lower third',
    config: {
      // height:"100%",
      // width:"100%",
      animationSpeed: "0",
      updateInterval: 5 * 60 * 1000,

      // config entry is not complete. Options to follow
      latitude:40.574794,
      longitude:-74.112454,
      zoom:12,   // 1-17
      maptype:1,  // 0/1  
      vesseltotrack:0,   //  vessel id
      fleet:'',		 //  url of fleet definiton	
      showmenu:false,    // show map menu
      shownames:false,   // show names of vessels
      border:0,          // map border
    }
},
```
### My thanks go to ?

I just don't know who yet. Haha
