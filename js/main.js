$(document).ready(function() {
    google.setOnLoadCallback(drawVisualization);
    console.log("ready");
});

function drawVisualization(){
  console.log("Drawing");

  $.getJSON('data/hashtags',function(hashtags){
    var data = google.visualization.arrayToDataTable(hashtags);

    console.log("Data's: "+hashtags);
    
    var chart = new google.visualization.ImageBarChart(document.getElementById('visualization'));
    chart.draw(data, {width: 900, height: 400, min: 0,isVertical: true});
  });
}


      

