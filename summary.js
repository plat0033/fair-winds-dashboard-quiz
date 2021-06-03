(async function fetchData () {
  const response = await fetch('https://plat0033.github.io/fair-winds/summary.json')
  const json = await response.json()
  setData(json)
})()

// fetch('https://plat0033.github.io/fair-winds/summary.json')
//       .then(response => response.json())
//       .then(json => setData(json) )

function setData(summary){
  //
console.log(summary[0].Client)
google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);


function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Clients');
  data.addColumn('number', 'Types');
  data.addColumn('number', 'Originations');
  data.addRows([
    [summary[0].Client, summary[0].ClientType  , summary[0].ClientOrigination]
  ]);

  var table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(data, {showRowNumber: false, width: '50%', height: '15%'});
}
}




