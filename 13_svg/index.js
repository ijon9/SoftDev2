// //Init your data:
var data = [4, 8, 15, 16, 23, 42];
// var x = d3.scaleLinear()
//     .domain([0, d3.max(data)])
//     .range([0, 420]);
//
// d3.select(".chart")
//   .selectAll("div")
//   .data(data)
//   .enter().append("div")
//   .style("width", function(d) { return x(d) * 10 + "px"; })
//   .text(function(d) {return d;})

//Breakdown
// //Select your chart.
// var chart = d3.select(".chart");
//
// //Prepare for data join.
// var bar = chart.selectAll("div");
//
// // (this defines selection to which you will join data)
//
// //Join your data.
// var barUpdate = bar.data(data);
//
// //Instantiate new elements by appending to the “enter selection.”
// var barEnter = barUpdate.enter().append("div");
// barEnter.text(function(d) { return d; });
// //Set width of each bar proportional to its data value.
// barEnter.style("width", function(d) {
// return d * 10 + "px"; });
//
// // (Taking advantage of each bar being already bound to a data element)
//
// //Label each bar.
// barEnter.text(function(d) { return d; });

//SVG Encoding
var data = [4, 8, 15, 16, 23, 42];

var width = 420,
    barHeight = 20;

var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", function(d) { return x(d) - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
.text(function(d) { return d; });
