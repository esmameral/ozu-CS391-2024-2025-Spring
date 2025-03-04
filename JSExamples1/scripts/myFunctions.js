function validateForm() {

    var name = document.getElementById("name").value;

    if (name == null || name == "") {
        alert("Animal name must be filled out");
        return false;
    }
    var age = document.getElementById("age").value;
    if (age == null || age == "") {
        alert("Animal age must be filled out");
        return false;
    }
    var desc = document.getElementById("desc").value;
    if (desc == null || desc == "") {
        alert("Animal description must be filled out");
        return false;
    }

    var breed = document.getElementById("breed").value;
    if (breed == null || breed == "") {
        alert("Animal breed must be filled out");
        return false;
    }
    var sex = "";
    if (document.getElementById("female").checked)
        sex = document.getElementById("female").value;
    else
        sex = document.getElementById("male").value;

    saveAnimalInfo(name, age, desc, breed, sex);


    return true;
}

function saveAnimalInfo(name, age, desc, breed, sex) {
    var array;
    if (localStorage) {
        array = JSON.parse(localStorage.getItem('animalList'));
        if (array == null) {
            array = [];
            localStorage.setItem('animalList', array);
        }
    }
    var id = Math.floor(Math.random() * 100);
    var animal = { id, name, age, desc, breed, sex }



    if (localStorage) {
        array.push(animal);
        localStorage.setItem("animalList", JSON.stringify(array));
    }

}




function printAnimals() {


    var text = "<table border='1'>";
    text += "<tr><th>Name</td><th>Breed</th><th>Age</th></tr>";

    if (localStorage) {
        var array = JSON.parse(localStorage.getItem("animalList"))
        var count = array.length;
        array.forEach((e => {
            const { name, breed, age } = e;
            text += "<tr><td>" + name + "</td><td>" + breed + "</td><td>" + age + "</td></tr>";
        }))


    }
    text += "</table>"
    document.getElementById("animals").innerHTML = text;
}
