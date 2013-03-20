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

     var hourlydata = google.visualization.arrayToDataTable([
          ['Month',   'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda'],
          ['2004/05',    165,      938,         522,             998,           450],
          ['2005/06',    135,      1120,        599,             1268,          288],
          ['2006/07',    157,      1167,        587,             807,           397],
          ['2007/08',    139,      1110,        615,             968,           215],
          ['2008/09',    136,      691,         629,             1026,          366]
        ]);
      
        // Create and draw the visualization.
        var ac = new google.visualization.AreaChart(document.getElementById('bars'));
        ac.draw(hourlydata, {
          title : 'Popular Hashtags By Hour',
          isStacked: true,
          width: 900,
          height: 400,
        });
  })
.error(function(status,errorThrown) { console.log(errorThrown); })




}


      

