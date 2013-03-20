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

function drawLines() {
       $.get('data/hashtag_hours',function(data) {
        var parts = {},hashs=[];
        rows = data.split("\n");
        for (var i = 0; i < rows.length; i++)
        {
                rows[i] = rows[i].split("\t");
                if(hashs.indexOf(rows[i][0]) === -1) {
                  hashs.push(rows[i][0]);
                }
                if(!parts[rows[i][1]]) {
                  parts[rows[i][1]]=[];
                  parts[rows[i][1]].push(new Date(rows[i][1]));
                }
                parts[rows[i][1]].push(parseInt(rows[i][2]));
        }
        
        var hourlydata = new google.visualization.DataTable();
        //hourlydata.addColumn('string','Date');

        $.each(hashs,function(index, tag){
           console.log(tag);
          hourlydata.addColumn('number',tag);
        });

        $.each(parts,function(index, dateh){
          console.log(dateh);
          if(dateh.length == 11){

            hourlydata.addRow(dateh);
          }
        });        

      
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

      

