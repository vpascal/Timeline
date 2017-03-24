google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {


    var container = document.getElementById('chart');
    var chart = new google.visualization.Timeline(container);

    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Position' );
    dataTable.addColumn( 'string',  'Name' );
    dataTable.addColumn('date',  'Start' );
    dataTable.addColumn( 'date',  'End' );
    dataTable.addRows([
      [ '4 & 5 Grade Endorsement','E Campus', new Date(2017, 5, 15), new Date(2017, 8, 4) ],
      [ '4 & 5 Grade Endorsement','E Campus', new Date(2018, 5, 15), new Date(2018, 8, 4) ],
      [ '4 & 5 Grade Endorsement', 'E Campus', new Date(2019, 5, 15), new Date(2019, 8, 4) ],


      [ 'Special Edu Masters Cohort','Southern', new Date(2016, 8, 15), new Date(2017, 8, 4) ],
      [ 'Special Edu Masters Cohort','Zanesville', new Date(2017, 8, 15), new Date(2019, 5, 1) ],
      [ 'Special Edu Masters Cohort','Lancaster', new Date(2019, 8, 15), new Date(2021, 5, 1) ],

     [ 'Transition to Work Certificate','E Campus', new Date(2018, 8, 15), new Date(2021, 8, 4) ],
     [ 'Pre-K Special Needs Endorsement','E Campus', new Date(2017, 8, 15), new Date(2021, 5, 1) ],
     [ 'Dean\'s Compact Dual Master\'s ECE/SpEd','E Campus', new Date(2017, 8, 15), new Date(2022, 5, 1) ],
      [ 'Reading Endorsement ','E Campus', new Date(2017, 5, 15), new Date(2017, 8, 4) ],
      [ 'Reading Endorsement ','E Campus', new Date(2018, 5, 15), new Date(2018, 8, 4) ],
      [ 'Reading Endorsement ', 'E Campus', new Date(2019, 5, 15), new Date(2019, 8, 4) ]


    ]);

 var options = {
      colors: ['#f2cf8d', '#4075e7', '#f02a2a','#ad9df0'],
      
    };


    chart.draw(dataTable,options);
  }