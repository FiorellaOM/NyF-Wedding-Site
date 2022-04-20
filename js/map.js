
const pos = ol.proj.fromLonLat([-57.72622851485104, -38.13018384626728]);

const marker = new ol.Overlay({
    position: pos,
    positioning: 'center-center',
    element: document.getElementById('marker'),
    stopEvent: false,
});

var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: pos,
      zoom: 15
    })
});

map.addOverlay(marker)