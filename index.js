const formButton = document.getElementById("formButton");
formButton.addEventListener("click",printTicket);

function printTicket() {
    //showing the ticket section:
    document.getElementById("boughtTicketsSection").setAttribute("style","display: flex;");
    //Getting the data from the form in the html
    let travelOption, cityOrigin, cityDestination,travelDate, travelHour;
    if(document.getElementById("airplaneSelection").checked){
        travelOption = "Avión";
    } else if(document.getElementById("busSelection").checked) {
        travelOption = "Bus";
    }
    cityOrigin = document.getElementById("originCity").value;
    cityDestination = document.getElementById("destinationCity").value;
    travelDate = document.getElementById("travelDate").value;
    travelHour = document.getElementById("travelHour").value;
    //filling the ticket
    document.getElementById("transportSelectionTicket").innerHTML = travelOption;
    document.getElementById("cityOriginTicket").innerHTML = cityOrigin;
    document.getElementById("cityDestinationTicket").innerHTML = cityDestination;
    document.getElementById("travelDateTicket").innerHTML = travelDate;
    document.getElementById("travelHourTicket").innerHTML = travelHour;
}