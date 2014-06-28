angular.module('ExampleApp', [])

    .directive('stickyNote', function () {
        return {
            restrict: 'E',  
            replace: true,
            scope: { 
                title: '@',
                message: '@',
            },
            templateUrl: 'angular.tmpl.html'
        }
    });
