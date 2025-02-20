**Table of Contents**

- [Simple-School-Web-Application](#simple-school-web-application)
  - [General-Information](#general-information)
  - [Notes-about-html-pages](#notes-about-html-pages)
  - [Other pages](#other-pages)
- [Step-by-step-tableless-layout-with-CSS-example](#step-by-step-tableless-layout-with-css-example)

## Simple-School-Web-Application
### General-Information
main.html is the entry point of the application.  

Menu items are:
* **Add New Course:** user can define a new course. addNewCourse.html uses a predefined bootstrap header.
* **Display Students:** user can list all students and search for a student. displayStudents.html uses the same header as the addNewCourse.html page
* **Search Course:** user can list all courses and search courses. This page also uses same header as previous pages

### Notes-about-html-pages
* **searchCourse.html** page is responsive page. Bootstrap grid system was used for responsive design. 
* **main.html** page's layout provided by CSS **float** and **position**. So, main page is not a responsive page. Liquid(floating) layout style was used. Responsive design was not used for this page because I wanted to keep one float-layout example in the project.
* The design of other pages are not yet completed.
* **success.html** After creating a new course successfully, this page will be displayed

### Other pages

* **index.html**
First version of home page. Layout provided by html-tables. This file is still in the project just for an example. Layout-with-tables is a very bad way

## Step-by-step-tableless-layout-with-CSS-example
Click for [instructions](tableless-layout.md).

