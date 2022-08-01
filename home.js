var select = "";
$(document).ready(function () {
    $.getJSON("https://restcountries.com/v3.1/all", function (data) {
        for (i = 0; i < data.length; i++) {
            strData = JSON.stringify(data[i].region);
            strData = strData.replaceAll('"', "");

            if (!select.includes(strData)) {
                $("#continentChoice").append(
                    "<option>" + strData + "</option>"
                );
                select += strData;
            }
        }


    });
});

$("#continentChoice").change(function () {
    let selectedChoice = $("#continentChoice :selected").text();
    $("#cityChoice").empty();
    getCountries(selectedChoice);
});

function getCountries(continent) {
    $("#countryChoice").empty();
    let link = "https://restcountries.com/v3.1/region/" + continent;
    link = link.replaceAll('"', "");

    $.getJSON(link, function (data) {
        for (i = 0; i < data.length; i++) {
            $("#countryChoice").append(
                "<option>" + data[i].name.common + "</option>"
            );
        }
    });
}

$("#countryChoice").change(function () {
    let selectedChoice = $("#countryChoice :selected").text();

    getCity(selectedChoice);
});

function getCity(country) {
    $("#cityChoice").empty();
    let link = "https://restcountries.com/v3.1/translation/" + country;
    link = link.replaceAll('"', "");

    $.getJSON(link, function (data) {
        for (i = 0; i < Object.keys(data[0].translations).length; i++) {
            //console.log(Object.keys(data[0].translations)[i]); //wrong hierarchy

            $("#cityChoice").append(
                "<option>" + Object.keys(data[0].translations)[i] + "</option>"
            );

        }
    });


    $("#searchButton").click(function () {
        let continent = $("#continentChoice :selected").text();
        let country = $("#countryChoice :selected").text();

        $('#thetable tr').not(':first').not(':last').remove();
        var html = '';
        for (var i = 0; i < data.d.length; i++)
            html += '<tr><td>' + continent +
                '</td><td>' + country + '</td></tr>';
        $('#thetable tr').first().after(html);
    });
}