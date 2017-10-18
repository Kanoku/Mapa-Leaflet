window.onload = function () {
	var mapa   = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				});

	var map = L.map('mapid', { 
		dragging:false,
		layers: [mapa]
		});

	map.locate({setView:true})
		.on('locationfound', function(e){
		            var marker = L.marker([e.latitude, e.longitude]).bindPopup('Estas aquí');
		            var precision = L.circle([e.latitude, e.longitude], e.accuracy/2, {
		                weight: 1,
		                color: 'blue',
		                fillColor: '#dadada',
		                fillOpacity: 0.6
		            });
		            var cirExterior = L.circle([e.latitude, e.longitude], e.accuracy*2000, {
		            	stroke: false,
		            	fill: true,
		            	color: '#fc6703',
		            	fillOpacity: 0.2
		            });
		            var cirMedio = L.circle([e.latitude, e.longitude], e.accuracy*500, {
		            	stroke: false,
		            	fill: true,
		            	color: '#fc6703',
		            	fillOpacity: 0.4
		            });
		            var cirInterior = L.circle([e.latitude, e.longitude], e.accuracy*125, {
		            	stroke: false,
		            	fill: true,
		            	color: '#fc6703',
		            	fillOpacity: 0.6
		            });
		            map.addLayer(marker);
		            map.addLayer(precision);
		            map.addLayer(cirExterior);
		            map.addLayer(cirMedio);
		            map.addLayer(cirInterior);
		});
}