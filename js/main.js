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

    drawLines();
  })
.error(function(status,errorThrown) { console.log(errorThrown); })
}

function drawLines(){
       $.get('data/hashtag_hours',function(data){
        var obj = {};
        rows = data.split("\n");
        for (var i = 0; i < rows.length; i++)
        {
                // Split on ", " in CSV data we received
                rows[i] = rows[i].split("\t");
                if (!obj[rows[i[1]])
                  obj[rows[i][1]] = {};
                obj[rows[i][1]][rows[i][0]]=rows[i][2];

        }
        console.log(obj);

      
        // Create and draw the visualization.
        var ac = new google.visualization.AreaChart(document.getElementById('lines'));
        ac.draw(hourlydata, {
          title : 'Popular Hashtags By Hour',
          isStacked: true,
          width: 900,
          height: 400,
        });
       })
       
}

      

