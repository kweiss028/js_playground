(function(){
    var data = [0,1,2,3,4,5,6,7];
    var petalPath = "m120 120 5-12 c0 0 6-12 " +
        "1-21-1-2-4-4-7-7-6-5-10-7-13-15-3 8-7 10-13 " +
        "15-3 3-6 4-7 7-6 9 1 21 1 21 l5 12";

    var svg = d3.select("body").append("svg")
        .attr("width", 300).attr("height", 300);

    svg.selectAll("path.petal").data(data)
        .enter()
        .append("path").attr("class", "petal")
        .attr("d", petalPath).attr("fill", "#fa5")
        .attr("transform", function(d){
            var num = d*45;
            return "rotate("+num+" 105 160)";
        });

    svg.selectAll("path.petal2").data(data)
        .enter()
        .append("path").attr("class", "petal2")
        .attr("d", petalPath).attr("fill", "#a5f")
        .attr("transform", function(d){
            var num = d*45 + 22.5;
            return "rotate("+num+" 105 160)";
        });

    svg.append("circle").attr("cx", 105).attr("cy", 160).attr("r", 60);

})();