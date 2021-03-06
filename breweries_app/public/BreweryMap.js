var mymap = L.map('mapid').setView([40.756157, -73.985345], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidG9tYm84NSIsImEiOiJja2xlenJhcm8yNGw4Mm5sYjdxZnVibzF6In0.bl1z-PX4xnJ2idl0uZ-iOA'
}).addTo(mymap);