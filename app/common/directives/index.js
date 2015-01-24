angular.module('directives', [])
  .directive('delayVideo', [function() {


      function link(scope, element, attrs) {
          
          // When finished loading, update the element
          $(element).onloadedmetadata = function() {
                this.currentTime = scope.startTime;
          };
      }
      
      return {
          link: link, 
          scope: { height: "@",  width: "@", source: "@", startTime: "=" },
          restrict: 'A',
          template: require('./views/video')
      };
  }])