      function drawVisualization() {
        // Create and populate the data table.
        var data = google.visualization.arrayToDataTable([
          ['KCA', 'RT', 'ILikeTODance', 'Greece'],
          [1901067,    517206,    916965,    1056036]
        ]);
      
        // Create and draw the visualization.
        new google.visualization.BarChart(document.getElementById('visualization')).
            draw(data,
                 {title:"Popular Hashtags over 24 hours,
                  width:600, height:400,
                  vAxis: {title: "Last 24 Hours"},
                  hAxis: {title: "Tweets"}}
            );
      }
      

      google.setOnLoadCallback(drawVisualization);