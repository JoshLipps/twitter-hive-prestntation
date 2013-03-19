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
      

          new google.visualization.ColumnChart(document.getElementById('visualization')).
            draw(data,
                 {title:"Popular Hashtags in past 24 Hours",
                  width:600, height:400,
                  hAxis: {title: "Year"}}
            );
      }
        
        chart.draw(data, options);
      }
      

      google.setOnLoadCallback(drawVisualization);


      

