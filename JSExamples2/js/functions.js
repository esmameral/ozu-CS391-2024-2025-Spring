//DRAG & DROP 
function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    var id = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(id));
}
//GEOLOCATION 
function getLocation() {
    var element = document.getElementById("location");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        element.innerHTML = "Getting the position information...";
    } else {
        element.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var coords = position.coords.latitude + "," + position.coords.longitude;
    document.getElementById("location").innerHTML = "Your location is:" + coords;
}

function showError(error) {
    var element = document.getElementById("location");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            element.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            element.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            element.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            element.innerHTML = "An unknown error occurred."
            break;
    }
}

//WEB STORAGE
function saveDataInTheLocalStorage(){
    if(localStorage){
        localStorage.setItem("user1","Umut");
        localStorage.setItem("user2","Senem");
        var userList = [{ "id": "123", "name": "ali", "email": "ali@ozu.edu.tr" },
        { "id": "234", "name": "hasan", "email": "hasan@ozu.edu.tr" }];
        
        localStorage.setItem("userList", JSON.stringify(userList));

        console.log(localStorage.getItem("user2"));
        console.log(localStorage.length);
        console.log(localStorage.key(2));
        console.log(localStorage.getItem("userList"));

    }
}
function saveDataInTheSessionStorage(){
    if(sessionStorage){
        sessionStorage.setItem("user3","Kerem");
    }
}
function deleteDataFromLocalStorage(){
    localStorage.removeItem("user1");
}


function printLocalStorage(){
    var n = localStorage.length;
    for (var i = 0; i < n; i++){
       var key = localStorage.key(i) ;
       var value=localStorage.getItem(key);
       console.log("Key:"+key+" "+"Value:"+value);

    }
 
}