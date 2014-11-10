(function(){
    var dataSet = [3, 3, 3, 4, 5, 5, 6, 6, 10];
    var svgWidth = 800;
    var svgHeight = 600;
    var xCenter = 0.5 * svgWidth;
    var yCenter = 0.5 * svgHeight;
    var mainR = yCenter - 100;
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

    var petalData = [0,1,2,3,4,5,6,7];
    var petalPath = "m "+(xCenter+15)+" "+(yCenter-40)+" 5-12 c0 0 6-12 " +
        "1-21-1-2-4-4-7-7-6-5-10-7-13-15-3 8-7 10-13 " +
        "15-3 3-6 4-7 7-6 9 1 21 1 21 l5 12";

    svg.selectAll("path.petal").data(petalData)
        .enter()
        .append("path").attr("class", "lotus")
        .attr("d", petalPath).attr("fill", "#fa5")
        .attr("transform", function(d){
            var num = d*45;
            return "rotate("+num+" "+xCenter+" "+yCenter+")";
        });

    svg.selectAll("path.petal2").data(petalData)
        .enter()
        .append("path").attr("class", "lotus")
        .attr("d", petalPath).attr("fill", "#a5f")
        .attr("transform", function(d){
            var num = d*45 + 22.5;
            return "rotate("+num+" "+xCenter+" "+yCenter+")";
        });

    svg.append("circle").attr("class", "lotus")
        .attr("cx", xCenter).attr("cy", yCenter).attr("r", 60);

})();