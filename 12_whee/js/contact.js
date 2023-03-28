// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
    
function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(25.037165, 121.5665586), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#ff0000"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": -30
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#353535"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#656565"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#505050"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#808080"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#454545"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [
                    {
                        "hue": "#000000"
                    },
                    {
                        "saturation": 100
                    },
                    {
                        "lightness": -40
                    },
                    {
                        "invert_lightness": true
                    },
                    {
                        "gamma": 1.5
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": "44"
                    },
                    {
                        "lightness": "-28"
                    },
                    {
                        "hue": "#ff9900"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "saturation": "-6"
                    },
                    {
                        "color": "#c27c7c"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "saturation": "0"
                    },
                    {
                        "lightness": "8"
                    },
                    {
                        "color": "#ae5252"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "lightness": "5"
                    },
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ff9900"
                    },
                    {
                        "weight": "3.55"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "saturation": "-83"
                    },
                    {
                        "weight": "1.84"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "gamma": "0.00"
                    },
                    {
                        "color": "#ff9900"
                    },
                    {
                        "lightness": "-6"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(25.037165, 121.5665586),
        map: map,
        title: 'Snazzy!'
    });
}