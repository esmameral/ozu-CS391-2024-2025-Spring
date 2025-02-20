
function saveInitialData() {
    if (localStorage) {
        if (!localStorage.getItem("courseList")) {
            var courseList = [
                { code: "CE101", title: "Technical Drawing", credit: "4", instructor: "PINAR SEYREK" },
                { code: "CE102", title: "Introduction to Civil Engineering", credit: "2", instructor: "ZEYNEP BAŞARAN BUNDUR" },
                { code: "CE211", title: "Dynamics", credit: "4", instructor: "DERYA DENİZ" },
                { code: "CE311", title: "Hidrolics", credit: "4", instructor: "YİĞİT CAN ALTAN" },
                { code: "CS104", title: "Introduction to Programming", credit: "6", instructor: "MİNE BANU TEKMAN" },
                { code: "CS102", title: "Object-Oriented Programming", credit: "6", instructor: "KÜBRA KALKAN ÇAKMAKCİ" },
                { code: "CS201", title: "Data Structures and Algorithms", credit: "6", instructor: "OLCAY TANER YILDIZ" },
                { code: "CS419", title: "Parallel Computing", credit: "6", instructor: "NİTEL MUHTAROĞLU" },
                { code: "EE350", title: "Electronics II", credit: "6", instructor: "TURGUT FEYİZ" },
                { code: "EE450", title: "Wireless Networks", credit: "6", instructor: "EVŞEN YANMAZ ADAM" },
                { code: "IE101", title: "Introduction to Industrial Engineering", credit: "6", instructor: "İHSAN YANIKOĞLU" },
                { code: "IE397", title: "Business Process Management", credit: "4", instructor: "DERYA ACAR KALDIRIM" }
            ];
            localStorage.setItem("courseList", JSON.stringify(courseList));
        }
    }
}

function searchCourse() {
    let searchText = document.getElementById("searchCourse").value;

    var courses = JSON.parse(localStorage.getItem("courseList"));
    if (!searchText || searchText.length == 0) {
        printCourses(courses);
        return;
    }
    var filteredArray = courses.filter(course => course.title.includes(searchText));
    printCourses(filteredArray);
}

function saveCourse() {
    var result = validateFormData();
    if (!result)
        return false;
    let code = document.getElementById("courseCode").value;
    let title = document.getElementById("courseName").value;
    let credit = document.getElementById("credit").value;
    let instructor = document.getElementById("instructor").value;
    let newCourse = { code, title, credit, instructor };
    var courses = JSON.parse(localStorage.getItem("courseList"));
    courses.push(newCourse);
    localStorage.setItem("courseList", JSON.stringify(courses));
}

function validateFormData() {
    var element = document.getElementById("courseCode");
    var value = element.value;
    var start = value.substring(0, 2);
    if (start != "CS") {
        alert("Course Code must start CS");
        return false;
    }
    return true;
}

function printCourses(courses) {
    if(!courses){
        var courses = JSON.parse(localStorage.getItem("courseList"));
    }

    var text = "";
    for (c of courses) {
        text += "<div class='col-6 col-md-4 col-lg-3'>";
        text += "<h3>" + c.code + "</h3> ";
        text += "<p>" + c.title + "</p>";
        text += "<p>" + c.instructor + "</p>";
        text += "<p>" + c.credit + " credits</p>";
        text += "</div>";

    }

    document.getElementById("courseList").innerHTML = text;
}

