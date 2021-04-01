(function (window) {
    'use strict';
    var App = window.App || {};

    function Receipt(ticketId, db) {
        console.log('In Payment constructor');
        this.ticketId = ticketId;
        this.db = db;
    }

    Receipt.prototype.createReceipt = function (receipt) {
        console.log('Adding receipt ticket for ' + receipt.username);
        this.db.add(receipt.username, receipt);
    };

    App.Receipt = Receipt;
    window.App = App;
})(window);