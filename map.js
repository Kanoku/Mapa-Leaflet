window.onload = function () {
	var normal   = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
					maxZoom: 15
				});
		topo  = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
				attribution: 'Map data &copy; <a href="http://openstreemap.org">OpenStreetMap</a>',
				maxZoom: 15
				});

	var map = L.map('mapid', {
		zoomControl:false, 
		dragging:false,
		layers: [normal, topo]
		});

	map.scrollWheelZoom.disable();
	map.locate({setView:true})
		.on('locationfound', function(e){
		            var marker = L.marker([e.latitude, e.longitude]).bindPopup('Estas aquí');
		            var circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
		                weight: 1,
		                color: 'blue',
		                fillColor: '#dadada',
		                fillOpacity: 0.6
		            });
		            map.addLayer(marker);
		            map.addLayer(circle);
		});

	var baseLayers = {
			"Normal": normal,
			"Topo": topo
		};

	L.control.layers(baseLayers).addTo(map);
}