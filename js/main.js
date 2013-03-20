      function drawVisualization() {
        // Create and populate the data table.
  


          var data = google.visualization.arrayToDataTable([['Hashtag','Count'],
['KCA',61964],
['RT',24213],
['TeamFollowBack',20970],
['gameinsight',19220],
['VoteWhatMakesYouBeautiful',17585],
['androidgames',15403],
['android',14419],
['TFBJP',14419],
['90sBabyFollowTrain',11552],
['TFB',9528]]);

      
        var chart = new google.visualization.ImageBarChart(document.getElementById('visualization'));
        chart.draw(data, {width: 900, height: 400, min: 0,isVertical: true});

      }
      

      google.setOnLoadCallback(drawVisualization);


      

