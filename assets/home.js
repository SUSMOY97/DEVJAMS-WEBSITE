$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});
/*window.onload = function() {
    'use strict';
    const admin = require('firebase-admin');
    const fs = require('fs');
    const functions = require('firebase-functions');
    var serviceAccount = require('./pingu-86df8-firebase-adminsdk-h9v0s-08ef71bae2.json');
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://pingu-86df8.firebaseio.com"
    });


    let db = admin.firestore();

    let citiesRef = db.collection('connections');


    let query = citiesRef.where('carrier', '==', "AIRTEL").where('flag', '==', 1).get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;

            }
            snapshot.forEach(doc => {

                console.log("Hi");

            });
        })

    .catch(err => {
        console.log('Error getting documents', err);
    });

}*/


$(function() {

    //get the line chart canvas
    var ctx = $("#line-chartcanvas1");

    //line chart data
    var data = {
        labels: ["Latitude1", "Latitude2", "Latitude3", "Latitude4", "Latitude5"],
        datasets: [{
            label: "Airtel",
            data: [145, 30, 28, 48.27],
            backgroundColor: "blue",
            borderColor: "black",
            fill: false,
            lineTension: 0,
            radius: 5
        }]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Line Graph",
            fontSize: 18,
            fontColor: "#222"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options
    });
});


$(function() {

    //get the line chart canvas
    var ctx = $("#line-chartcanvas");

    //line chart data
    var data = {
        labels: ["Latitude1", "Latitude2", "Latitude3", "Latitude4"],
        datasets: [{
            label: "Jio",
            data: [10, 50, 25, 70, 40],
            backgroundColor: "yellow",
            borderColor: "black",
            fill: false,
            lineTension: 0,
            radius: 5
        }]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Line Graph",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options
    });
});

$(function() {

    //get the line chart canvas
    var ctx = $("#line-chartcanvas2")

    //line chart data
    var data = {
        labels: ["match1", "match2", "match3", "match4", "match5"],
        datasets: [{
            label: "Airtel",
            data: [10, 50, 25, 70, 40],
            backgroundColor: "blue",
            borderColor: "black",
            fill: false,
            lineTension: 0,
            radius: 5
        }]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Line Graph",
            fontSize: 18,
            fontColor: "#222"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options
    });
});


$(function() {

    //get the line chart canvas
    var ctx = $("#line-chartcanvas3")

    //line chart data
    var data = {
        labels: ["match1", "match2", "match3", "match4", "match5"],
        datasets: [{
                label: "Airtel",
                data: [10, 50, 25, 70, 40],
                backgroundColor: "green",
                borderColor: "black",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: "Jio",
                data: [20, 35, 40, 60, 50],
                backgroundColor: "blue",
                borderColor: "yellow",
                fill: false,
                lineTension: 0,
                radius: 5
            }
        ]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Line Graph",
            fontSize: 18,
            fontColor: "#222"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options
    });
});

$(function() {

    //get the line chart canvas
    var ctx = $("#line-chartcanvas4")

    //line chart data
    var data = {
        labels: ["Latitude1", "Latitude2", "Latitude4", "Latitude5"],
        datasets: [{
                label: "Airtel",
                data: [10, 50, 25, 70, 40],
                backgroundColor: "black",
                borderColor: "pink",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: "Jio",
                data: [20, 35, 40, 60, 50],
                backgroundColor: "red",
                borderColor: "yellow",
                fill: false,
                lineTension: 0,
                radius: 5
            }
        ]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Line Graph",
            fontSize: 18,
            fontColor: "#222"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options
    });
});

// TODO: Function to generate a random color for each bar
chart.datasets.forEach(() => {

});