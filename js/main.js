$(document).ready(function() {
    google.setOnLoadCallback(drawVisualization);
}

function drawVisualization() {
  $.getJSON('data/hashtags',function(hashtags){
    var data = google.visualization.arrayToDataTable(hashtags);
    var chart = new google.visualization.ImageBarChart(document.getElementById('visualization'));
    chart.draw(data, {width: 900, height: 400, min: 0,isVertical: true});
  });
}


      

