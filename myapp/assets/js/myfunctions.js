function validateFormData() {

    if (courseCode == null || courseCode == "") {
        alert("Enter course code");
        return false;
    }

    if (courseName == null || courseName == "") {
        alert("Enter course name");
        return false;
    }

    if (courseCredit == null || courseCredit == "") {
        alert("Enter course credit");
        return false;
    }
    return true;
}

function saveCourse() {
    if (validateFormData() == false)
        return false;
    var courseCode = document.getElementById('courseCode').value;
    var courseName = document.getElementById('courseName').value;
    var courseCredit = document.getElementById('courseCredit').value;
    var courseDefinition = document.getElementById('courseDefinition').value;
    var instructor = document.getElementById('instructors').value;

    var course = { code: courseCode, name: courseName, credit: courseCredit, definition: courseDefinition, instructor: instructor };
    saveToLocalStorage(course);
    
}


function printCourses() {
    if(localStorage){
        myList= JSON.parse(localStorage.getItem("courseList"));
        var text="<table>";
        myList.forEach(course=>{
            text=text+"<tr><td>"+course.code+"</td><td>"+course.name+"</td><td>"+course.definition+"</td></tr>";
        })
        text=text+"</table>";
        var element=document.getElementById("courseList");
        element.innerHTML=text;
    }
}

function saveToLocalStorage(course){
    if(localStorage){
       myList= JSON.parse(localStorage.getItem("courseList"));
       if(myList==null){
        myList=[];
        localStorage.setItem("courseList",JSON.stringify(myList));
       }
       myList.push(course);
       localStorage.setItem("courseList",JSON.stringify(myList));
    }

}