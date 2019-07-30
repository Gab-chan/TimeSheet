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


var nameRows = [];
var roleRows = [];
var startRows = [];
var monthsRows = [];
var monthsRows = [];
var monthlyRows = [];
var totalRows = [];

function createRows(){
    for (var i = 0; i < nameRows.length; i++) {
        var row1 = $("<div>");
        row1.text(nameRows[i]);
        row1.attr("data-row", nameRows[i]);
        row1.addClass("column col-md-2");
        $("#row1").append(row1);

        
    }

    for (var i = 0; i < roleRows.length; i++) {
        var row2 = $("<div>");
        row2.text(roleRows[i]);
        row2.attr("data-row", roleRows[i]);
        row2.addClass("column col-md-2");
        $("#row1").append(row2);

        
    }
    

}
createRows();