$(function () {

    var ViewModel = function () {
        this.Title = ko.observable('Remember');
        this.Message = ko.observable('the milk');
    };

    var viewmodel = new ViewModel();
    ko.applyBindings(viewmodel);

});