/* global L */
;(function (window) {
  function init (mapid) {
    var minZoom = 0
    var maxZoom = 6
    var img = [
      12992, // original width of image 
      7536  // original height of image
    ]

    nord1 = L.tileLayer('./nord/1/{z}/{x}/{y}.png', {
      noWrap: true,
      attribution: 'edificio nord primo piano'
    });

    ovest1 = L.tileLayer('./ovest/1/{z}/{x}/{y}.png', {
      noWrap: true,
      attribution: 'edificio ovest primo piano'
    });

    // create the map
    var map = L.map(mapid, {
      minZoom: minZoom,
      maxZoom: maxZoom,
      layers: [nord1, ovest1]
    })

	var baseMaps = {
		"Ed. Ovest piano 1": ovest1,
		"Ed. Nord piano 1": nord1
	};

    // assign map and image dimensions
    var rc = new L.RasterCoords(map, img)
	L.control.layers(baseMaps).addTo(map);
    map.setView(rc.unproject([6496, 3768]), 2)
    var hash = new L.Hash(map);
 }
  init('map')
}(window))
