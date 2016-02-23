angular.module('timeApp').directive('showTime', function() {

  //this object represents the instructions for how our directive is supposed to run
  return {
    restrict: 'E',
    template:'<div> The current time is {{time}} </div>',
    link: function(scope, element, attrs) {
      var currentTime = new Date();
      scope.time = currentTime.toString();
    }
  }

});
