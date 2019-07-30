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
        var row = $("<p>");
        row.text(NameRows[i]);
        row.attr("data-row", Namerows[i]);
        row.addClass("row");
        $(".list-group").append(row);

        
        
    }
    

}
createRows();