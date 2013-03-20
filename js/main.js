$(document).ready(function() {
    google.setOnLoadCallback(drawVisualization);
    console.log("ready");
});

function drawVisualization(){
  console.log("Drawing");

  $.get('data/hashtags.json',function(hashtags){
    var data = google.visualization.arrayToDataTable(hashtags);
    console.log("Data");
    
    var chart = new google.visualization.ImageBarChart(document.getElementById('visualization'));
    chart.draw(data, {width: 900, height: 400, min: 0});
  });
}


      

