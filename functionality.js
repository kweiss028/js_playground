$(document).ready(function(){
    var $infoPoints = $('svg').find('.info');
    var radiusStore = 0;

    $infoPoints.hover(
        function(){
            radiusStore = $(this).attr('r');
            $(this).attr('class', 'active').attr('r', 2*radiusStore);
        },
        function(){
            var $this = $(this);

            $this.attr('class', function(){
                return $this.attr('class').replace( /(?:^|\s)active(?!\S)/g , '' );
            }).attr('r', radiusStore);
        }
    );

});