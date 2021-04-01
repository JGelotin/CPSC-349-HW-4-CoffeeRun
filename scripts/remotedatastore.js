/*jshint esversion: 6 */

(function (window) {
    'use strict';
    var App = window.App || {};

    var firebaseConfig = {
        apiKey: "AIzaSyAmnWSlQSrhXZfE3ia6zfzokmnkr14K__4",
        authDomain: "coffeerun-89931.firebaseapp.com",
        databaseURL: "https://coffeerun-89931-default-rtdb.firebaseio.com",
        projectId: "coffeerun-89931",
        storageBucket: "coffeerun-89931.appspot.com",
        messagingSenderId: "323528218810",
        appId: "1:323528218810:web:8933d65d8b4d261f8b8a83",
        measurementId: "G-QCB9S16FN1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    var firestore = firebase.firestore();

    function RemoteDataStore(url) {
        this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function (key, val) {
        firestore.collection("orders").doc(key).set(val);
    };

    RemoteDataStore.prototype.getAll = function () {
        var allDocuments = firestore.collection("orders").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
        });
        return allDocuments;
    };

    RemoteDataStore.prototype.get = function (key) {
        var docRef = firestore.collection("orders").doc(key);

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    };

    RemoteDataStore.prototype.remove = function (key) {
        firestore.collection("orders").doc(key).delete();
    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);