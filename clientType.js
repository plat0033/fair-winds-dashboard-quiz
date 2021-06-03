(async function fetchData () {
  const response = await fetch('https://plat0033.github.io/fair-winds/clientType.json')
  const json = await response.json()
  setData(json)
})()

let clients = [['Client Type', 'percentage', {type: 'string', role: 'tooltip'}]]
function setData(data){
   for (let clientInfo of data){
     clients.push([clientInfo.ClientType, clientInfo.Count, `${clientInfo.ClientType} - Count: ${clientInfo.Count}`])
   }   
}

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable(clients);

  var options = {
    legend: 'labeled',
    pieSliceText: 'none',
    // pieStartAngle: 100,
    slices: {  1: {offset: 0.05}, 2: {offset: 0.15}, 3: {offset: 0.20}, 0: {offset: 0.1}},
    chartArea:{left:100,top:100, width:'100%', height:'75%'},
    pieStartAngle: 95,
    backgroundColor: 'none',
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}