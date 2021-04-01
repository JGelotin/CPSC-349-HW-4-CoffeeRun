(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-payment-info="form"]';
    var App = window.App;
    var Receipt = App.Receipt;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;

    var myReceipt = new Receipt('12983783', new DataStore());
    window.myReceipt = myReceipt;

    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        var modal = document.querySelector('.modal');
        myReceipt.createReceipt.bind(myReceipt);

        var title = data.title;
        var username = data.username;

        modal.textContent = "Thank you for your payment, " + title + " " + username + "!";

        $(modal).show(function () {
            setTimeout(function () {
                $(modal).hide();
            }, 5000);
        });
    });
    console.log(formHandler);
})(window);