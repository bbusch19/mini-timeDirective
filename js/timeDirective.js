angular.module('timeApp').directive('showTime', function() {

  //this object represents the instructions for how our directive is supposed to run
  return {
    restrict: 'E',
    template:'<div> The current time is {{time | date: format}} </div><div> The current time is {{gmtTime | date: format}} </div>',
    scope: {
      format: '=',
      update: '&'
    },
    link: function(scope, element, attrs) {
      var currentTime = new Date();
      scope.gmtTime = currentTime.toGMTString();
      scope.time = new Date(currentTime.toGMTString());
      element.css({color: 'blue', fontWeight: 'bold'});
      element.on('mousedown', function() {
        // scope.time = new Date();
        // scope.gmtTime = currentTime.toGMTString();
        scope.update();
        scope.$apply();
      });
    }
  }

});
