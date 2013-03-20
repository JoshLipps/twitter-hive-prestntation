      function drawVisualization() {
        // Create and populate the data table.
  
        $.getJSON('data/hashtag',function(hashtags){
          var data = google.visualization.arrayToDataTable(hashtags);
          var chart = new google.visualization.ImageBarChart(document.getElementById('visualization'));
          chart.draw(data, {width: 900, height: 400, min: 0,isVertical: true});

        });
      }
      
$(document).ready(function() {
    google.setOnLoadCallback(drawVisualization);
  }


      

