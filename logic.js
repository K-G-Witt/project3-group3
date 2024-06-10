// Initialize the map
let map = L.map('map').setView([37.8, -96], 4);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to get color based on the value
function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

// Function to style each feature
function style(feature) {
    return {
        fillColor: getColor(feature.properties.value),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// Function to highlight feature on hover
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

// Function to reset highlight
function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

// Function to zoom to feature
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// Function to handle each feature
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

// Load GeoJSON data and add to map
d3.json('us-states.geojson').then(function(statesData) {

    // Load CSV data and add to map
    d3.csv('http://localhost:8000/Averaged_Cleaned_filtered_data.csv').then(function(data) {

        // Function to create a layer for a specific year, gender, and ethnicity
        function createLayer(year, gender, ethnicity) {
            var filteredData = data.filter(d => d.Year == year && d.Gender == gender && d.Ethnicity == ethnicity);

            // Iterate through the filtered CSV data
            filteredData.forEach(d => {
                var state = d['US States']; // Assuming the column name is 'US States' in your CSV
                var value = +d['Data_Value/100_000 People'];
                
                // Find the corresponding feature in the GeoJSON data and update its properties
                statesData.features.forEach(feature => {
                    if (feature.properties.name == state) {
                        feature.properties.value = value;
                    }
                });
            });

            // Create and return the GeoJSON layer
            return L.geoJson(statesData, {
                style: style,
                onEachFeature: onEachFeature
            });
        }

        // Example of adding layers for different years, genders, and ethnicities
        var layers = {};

        Promise.all([
            createLayer(2009, 'Male', 'All'),
            createLayer(2009, 'Female', 'All'),
            createLayer(2010, 'Male', 'All'),
            createLayer(2010, 'Female', 'All')
        ]).then(function(results) {
            layers['2009 - Male - All Ethnicities'] = results[0];
            layers['2009 - Female - All Ethnicities'] = results[1];
            layers['2010 - Male - All Ethnicities'] = results[2];
            layers['2010 - Female - All Ethnicities'] = results[3];

            // Add the initial layer to the map
            layers['2009 - Male - All Ethnicities'].addTo(map);

            // Add layer control
            L.control.layers(null, layers).addTo(map);
        });
    });
});
