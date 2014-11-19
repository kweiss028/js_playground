(function(){
    var data = [0,1,2,3,4,5,6,7];
    var petalPath = "M 120,120 l -8,-24 c -4,-24 24,-16 24,-42 c 0,26 28,12 24,42 l -8,24";

    var svg = d3.select("body").append("svg")
        .attr("width", 300).attr("height", 300);

    var flower = svg.append("g");

    flower.selectAll("path.petal").data(data)
        .enter()
        .append("path").attr("class", "petal")
        .attr("d", petalPath).attr("fill", "#fa5")
        .attr("transform", function(d) {
            var phi = d*45;
            return "rotate("+ phi +" 136 168)";
        });

    flower.selectAll("path.petal2").data(data)
        .enter()
        .append("path").attr("class", "petal2")
        .attr("d", petalPath).attr("fill", "#a5f")
        .attr("transform", function(d) {
            var phi = d*45 + 22.5;
            return "rotate("+ phi +" 136 168)";
        });

    svg.append("circle").attr("cx", 136).attr("cy", 168).attr("r", 72);

    var t0 = Date.now();
    d3.timer(function() {
        var delta = (Date.now() - t0);

        flower.attr("transform", function(d) {
            return "rotate("+ delta/360 +" 136 168)";
        });
    });


})();