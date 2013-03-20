      function drawVisualization() {
        // Create and populate the data table.
  


          var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['2004',  1000],
          ['2005',  1170],
          ['2006',  660],
          ['2007',  1030]
        ]);

      
        var chart = new google.visualization.ImageBarChart(document.getElementById('visualization'));
        chart.draw(data, {width: 400, height: 240, min: 0,isVertical: true});

      }
      

      google.setOnLoadCallback(drawVisualization);


      

