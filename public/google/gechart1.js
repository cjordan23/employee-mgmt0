google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyDlMIVnxAhJgv8bi-lT5FjGpX6VTonZsAs'
});
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
            ['State', 'Population'],
            ['Aceh',6], 
            ['Bali',3], 
            ['Kepulauan Bangka Belitung',6],
            ['Bengkulu',2], 
            ['Banten',7], 
            ['Gorontalo',3], 
            ['Jambi',3], 
            ['Jawa Barat',2],  
            ['Jawa Timur',2], 
            ['DKI Jakarta',8], 
            ['Jawa Tengah',6],
            ['Kalimantan Barat',4], 
            ['Kalimantan Timur',5], 
            ['Kepulauan Riau',7],
            ['Kalimantan Selatan',5], 
            ['Kalimantan Tengah',6], 
            ['Kalimantan Utara',5], 
            ['Lampung',2], 
            ['Maluku',1], 
            ['Maluku Utara',2],
            ['Nusa Tenggara Barat',9], 
            ['Nusa Tenggara Timur',8], 
            ['Papua',5], 
            ['Papua Barat',6], 
            ['Riau',5], 
            ['Sulawesi Utara',8],
            ['Sumatera Barat',6], 
            ['Sulawesi Tenggara',9], 
            ['Sulawesi Selatan',5], 
            ['Sulawesi Barat',4], 
            ['Sumatera Selatan',6], 
            ['Sulawesi Tengah',7], 
            ['Sumatera Utara',4], 
            ['DI Yogyakarta',3], 

        ]);

        var options = {
            region:'ID',
            displayMode:'regions',
            resolution:'provinces',
        
            

        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
