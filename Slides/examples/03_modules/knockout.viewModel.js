require(['jquery', 'knockout', 'domReady!'], function ($, ko) {

    var ViewModel = function () {
        this.title = ko.observable('Remember');
        this.message = ko.observable('the milk');
    };

    var viewmodel = new ViewModel();
    ko.applyBindings(viewmodel);

});