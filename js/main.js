$(document).ready(function() {
    google.setOnLoadCallback(drawVisualization);
    console.log("ready");
});

function drawVisualization(){
  console.log("Drawing");

  var jqxhr = $.get('data/hashtags.json',function(hashtags){
    var data = google.visualization.arrayToDataTable(hashtags.array);
    console.log("Data");
    
    var chart = new google.visualization.ImageBarChart(document.getElementById('visualization'));
    chart.draw(data, {width: 900, height: 400, min: 0});
  })
.error(function(status,errorThrown) { console.log(errorThrown); })
}


      

