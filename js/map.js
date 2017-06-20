mapboxgl.accessToken = 'pk.eyJ1IjoiaW5mcmF0YWIiLCJhIjoiY2ozemhwbWxxMDNmNDJ3bGJxZjVkZzhzdyJ9.QA-mRtYzEfP0lZ0wX4WLIA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/infratab/cj457sqhy08im2rpjfjp6fnuh',
    zoom: 1.5
});

map.on('load', function () {

    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [77.585906, 12.912864]
                    },
                    "properties": {
                        // "title": "Infratab",
                        "icon": "marker"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-119.10619300000002, 34.143765]
                    },
                    "properties": {
                        // "title": "Infratab Inc",
                        "icon": "marker"
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-size": 1.5,
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
});
