      function drawVisualization() {
        // Create and populate the data table.
        var data = google.visualization.arrayToDataTable([
          ["firstHashtag","Count"],
          ["KCA","61964"],
          ["RT","24213"],
          ["TeamFollowBack","20970"],
          ["gameinsight","19220"],
          ["VoteWhatMakesYouBeautiful","17585"],
          ["androidgames","15403"],
          ["android","14419"],
          ["TFBJP","14419"],
          ["90sBabyFollowTrain","11552"],
          ["TFB","9528"]
          ]);
      
        // Create and draw the visualization.
        var chart = new google.visualization.ColumnChart(document.getElementById('visualization'));
        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
        };
        
        chart.draw(data, options);
      }
      

      google.setOnLoadCallback(drawVisualization);