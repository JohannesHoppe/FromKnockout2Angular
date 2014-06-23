angular.module('ExampleApp', [])

    .directive('sticky-note', function () {
        return {
            // directive only matches elements now
            restrict: 'E',  
            replace: true,
            // creates a new isolated scope 
            // '=' means bi-directional / '@' means the variable will be copied (cloned)
            scope: { 
                Title: '@title',
                Message: '@message',
            },
            template:
                '<div class="sticky_note">' +
                '    <div>' +
                '        <h1>{{Title}}</h1>' +
                '        <p>{{Message}}</p>' +
                '    </div>' +
                '</div>'
        }
    })

    .controller('ExampleController', function ($scope) {

        $scope.model = {
            Title: "Remember",
            Message: "the milk"
        }
        
    });