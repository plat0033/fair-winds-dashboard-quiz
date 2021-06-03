(async function fetchData () {
  const response = await fetch('https://plat0033.github.io/fair-winds/clientOrigination.json')
  const json = await response.json()
  setData(json)
})()

// fetch('https://plat0033.github.io/fair-winds/clientOrigination.json')
//       .then(response => response.json())
//       .then(json => setData(json) )

function setData(data){
   // Loop through each data and populate the array.
   for (let clientInfo of data){
     clients.push([clientInfo.ClientOrigination, clientInfo.Count, clientInfo.Count])
   }
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

let clients = [['Feed', 'Count', {type: 'string', role: 'annotation'}]]
function drawChart() {
  var data = google.visualization.arrayToDataTable(clients);
  var options = {
    // curveType: 'function',
    legend: { position: 'center' },
    backgroundColor: 'none'
  };

  var chart = new google.visualization.LineChart(document.getElementById('linechart_values'));

  chart.draw(data, options);
}