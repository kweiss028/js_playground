(function(){
    var dataSet = [3, 3, 3, 4, 5, 5, 6, 6, 10];
    var svgWidth = 1024;
    var svgHeight = 768;
    var xCenter = 0.5 * svgWidth;
    var yCenter = 0.5 * svgHeight;
    var mainR = 240;
    var svg = d3.select("body").append("svg")
        .attr("width", svgWidth).attr("height", svgHeight);

    svg.append("rect").attr("x", 10).attr("y", 10)
        .attr("width", svgWidth - 20).attr("height", svgHeight - 20)
        .attr("fill", "#025");

    svg.append("ellipse").attr("cx", xCenter).attr("cy", yCenter)
        .attr("rx", 1.5 * mainR).attr("ry", mainR)
        .attr("fill", "none").attr("stroke", "#fff")
        .attr("stroke-width", 1);

    var infoPoints = svg.selectAll("circle.info").data(dataSet)
        .enter()
        .append("circle").attr("class", "info")
        .attr("fill", "#025").attr("stroke", "#fff");

    function putOnEllipse(i) {
        var circlePos = ( 2 * Math.PI / dataSet.length ) * i;

        var myX = xCenter + 1.5 * mainR * Math.cos(circlePos);
        var myY = yCenter - mainR * Math.sin(circlePos);

        return [myX, myY];
    }

    infoPoints.attr("cx", function (d, i) {
        return putOnEllipse(i)[0];
    }).attr("cy", function (d, i) {
        return putOnEllipse(i)[1];
    }).attr("r", 12);
})();