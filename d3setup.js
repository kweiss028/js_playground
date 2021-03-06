(function(){

// SETUP

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


// NODES

    var dataSet = [3, 3, 3, 4, 5, 5, 6, 6];

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


// LOTUS FLOWER

    var petalData = [0,1,2,3,4,5,6,7];
    var petalPath = "m "+(xCenter-16)+","+(yCenter-48)+
        " l -8,-24 c -4,-24 24,-16 24,-42 c 0,26 28,12 24,42 l -8,24";

    var flower = svg.append("g");

    flower.selectAll("path.lotus").data(petalData)
        .enter()
        .append("path").attr("class", "lotus")
        .attr("d", petalPath).attr("fill", "#fa5")
        .attr("transform", function(d) {
            var phi = d*45;
            return "rotate("+ phi +" "+xCenter+" "+yCenter+")";
        });

    flower.selectAll("path.lotus2").data(petalData)
        .enter()
        .append("path").attr("class", "lotus")
        .attr("d", petalPath).attr("fill", "#a5f")
        .attr("transform", function(d) {
            var phi = d*45 + 22.5;
            return "rotate("+ phi +" "+xCenter+" "+yCenter+")";
        });

    svg.append("circle").attr("class", "lotus")
        .attr("cx", xCenter).attr("cy", yCenter).attr("r", 72);


// animation

    var t0 = Date.now();
    d3.timer(function() {
        var delta = (Date.now() - t0);

        flower.attr("transform", function(d) {
            return "rotate("+ delta/360 +" "+xCenter+" "+yCenter+")";
        });
    });

})();