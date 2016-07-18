(function () {
  'use strict';
  var angular = window.angular;
angular.module('lodash', [])
    .run([
        '$window', function ($window) {
            if (!$window || !$window._) 
                throw new Error("Js library 'Lo-Dash' is not available! You either misspelled " +
                    "the lib name or forgot to load it. Please check http://lodash.com/");
           
        }
    ])
.factory('_', ['$window', function ($window) {
    if ($window && $window._) 
        return $window._;
     else 
        throw new Error("Js library 'Lo-Dash' is not available! You either misspelled " +
            "the lib name or forgot to load it. Please check  http://lodash.com/");
}]);
})();