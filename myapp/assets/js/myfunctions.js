function validateFormData(){
    var courseCode=document.getElementById('courseCode').value;
    var courseName=document.getElementById('courseName').value;
    var courseCredit=document.getElementById('courseCredit').value;
    var courseDefinition=document.getElementById('courseDefinition').value;
    var instructor=document.getElementById('instructors').value;
if(courseCode==null||courseCode==""){
    alert("Enter course code");
    return false;
}

if(courseName==null||courseName==""){
    alert("Enter course name");
    return false;
}
 
if(courseCredit==null||courseCredit==""){
    alert("Enter course credit");
    return false;
}
var course ={code:courseCode, name:courseName, credit:courseCredit, definition:courseDefinition, instructor:instructor};
saveCourse(course);
return true;
}

function saveCourse(course){
    console.log(course);

}