const map = L.map('map', {
    zoomControl: false // Disable the default zoom control
  }).setView([42.7434117, -73.6817878], 12); 
  
  // Add a new zoom control with the desired position
  L.control.zoom({
    position: 'bottomleft' // Set the zoom control position, e.g., 'topleft', 'topright', 'bottomleft', 'bottomright'
  }).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const troyBoundary = new L.GeoJSON.AJAX('src/map/troy_boundary.geojson', {
  style: function (feature) {
    if (feature.properties.type === 'mask') {
      return {
        fillColor: '#66b539',
        fillOpacity: 0.5,
        stroke: false,
        interactive: false
      };
    } else {
      return {
        color: '#66b539',
        weight: 6,
        opacity: 1,
        fillOpacity: 0,
      };
    }
  }
}).addTo(map);

// Define green space data as an array of objects
const greenSpaces = [
    //Prospect Park
    {
    name: "Prospect Park",
    lat: 42.724,
    lng: -73.684,
    description: "This park was originally designed in 1903 by local landscape engineer Garnet Douglass Baltimore, the first African-American graduate of Rensselaer Polytechnic Institute. "
    },
    //Frear Park
    {
    name: "Frear Park",
    lat: 42.746,
    lng: -73.666,
    description: "This park was initially opened in 1917, on land donated by the Frear Family, later expanding to its current size of 247 acres (100 ha). The park contains nature trails, as well as tennis courts, a golf course, and an ice rink."
    },

    //Beman Park
    //Riley Park
    //9th Ave Park
    //Poestenkill Gorge Park
    //Knickerbacker park
    //Burden Pond Preserve
    //Burden Environmental Park
    //Col. Albert Pawling Memorial Park

];

// Add markers and popups for each green space
greenSpaces.forEach(space => {
    const marker = L.marker([space.lat, space.lng]).addTo(map);
    marker.bindPopup(`<b>${space.name}</b><br>${space.description}`);
});
