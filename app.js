$(document).ready(function () {

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyB_N-jjhq6nk-mtF0c-Wo43EibouEpvc44",
        authDomain: "employeelist-bbe16.firebaseapp.com",
        databaseURL: "https://employeelist-bbe16.firebaseio.com",
        projectId: "employeelist-bbe16",
        storageBucket: "",
        messagingSenderId: "481309067568",
        appId: "1:481309067568:web:994698336e47f9dd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    let database = firebase.database();





}) 

// var Rows = [];
var nameRows = [];
var roleRows = [];
var startRows = [];
var monthsRows = [];
var monthlyRows = [];
var totalRows = [];

function createRows(){
    // for (var i = 0; i < nameRows.length; i++) {
    //     var row = $("<div>");
    //     row.text(nameRows[i]);
    //     row.attr("data-row", nameRows[i]);
    //     row.addClass("column col-md-2");
    //     $("#row1").append(row);

        
    // }

    for (var i = 0; i < nameRows.length; i++) {
        var row = $("<div>");
        row.text(nameRows[i]);
        row.attr("data-row", nameRows[i]);
        row.addClass("column col-md-2");
        $("#row1").append(row);

        
    }

    for (var i = 0; i < roleRows.length; i++) {
        var row = $("<div>");
        row.text(roleRows[i]);
        row.attr("data-row", roleRows[i]);
        row.addClass("column col-md-2");
        $("#row1").append(row);

        
    }

    for (var i = 0; i < startRows.length; i++) {
        var row = $("<div>");
        row.text(startRows[i]);
        row.attr("data-row", startRows[i]);
        row.addClass("column col-md-2");
        $("#row1").append(row);

        
    }

    for (var i = 0; i < monthsRows.length; i++) {
        var row = $("<div>");
        row.text(monthsRows[i]);
        row.attr("data-row", monthsRows[i]);
        row.addClass("column col-md-2");
        $("#row1").append(row);

        
    }

    for (var i = 0; i < monthlyRows.length; i++) {
        var row2 = $("<div>");
        row2.text(monthlyRows[i]);
        row2.attr("data-row", monthlyRows[i]);
        row2.addClass("column col-md-2");
        $("#row1").append(row2);

        
    }

    for (var i = 0; i < totalRows.length; i++) {
        var row2 = $("<div>");
        row2.text(totalRows[i]);
        row2.attr("data-row", totalRows[i]);
        row2.addClass("column col-md-2");
        $("#row1").append(row2);

        
    }
    

}
createRows();