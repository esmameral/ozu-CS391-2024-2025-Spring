
1. Float links to the right

    ```
    header div {
        float: right;
        ...
    }
    ```
2. style the header 

   to fix header at the top of the window, add following css rules in the header section of the css file.
   Change the header's height

   ```
    top: 0px;
    height: 55px;
    position: fixed;
    ```

3. Give spaces before content of the page. Add following css class definition:

    ```
    .content {
        padding-top: 55px;
    }
    ```

4. Let format content section. **Side** section should use 20% and **middle** section should use 80% of screen. Create two unequal columns that floats next to each other

    ```
    .column {
        float: left;
        padding: 10px;
        ...
    }
    ```

    ```
    /* Left column */
    .column.side {
        width: 20%;
    }
    /* Middle column */
    .column.middle {
        width: 80%;
    }
    ```
5.  Add following css definition

    ```
    footer div {
        width: 30%;
        border-color: red;
        border-style: solid;
        margin: 10px;
    }
    ```

6.   Delete list item's marker

    ```
    footer div ul {
        list-style-type: none;
    }
    ```
7.  Update footer css rules

    ```
    footer {
        ...
        clear:both;
        width: 100%;
        height: 230px;
    }
    ```

8.  Complete version of css file

    ```
    * {
    box-sizing: border-box;
    }

    body {
        margin: 0;
    }

    /* Style the header */
    header {
        width: 100%;
        padding: 3px;
        overflow: hidden;
        background-color: #A30050;
        top: 0;
        height: 55px;
        position: fixed;
        
    }

    /* Style the menu links */
    header div {
        float: right;
    }

    header div a {
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
    }

    .content {
        padding-top: 55px;
    }

    /* Change color on hover */
    header a:hover {
        background-color: #ddd;
        color: black;
    }

    /* Create two unequal columns that floats next to each other */
    .column {
        float: left;
        padding: 10px;
    }

    /* Left column */
    .column.side {
        width: 20%;
    }
    /* Middle column */
    .column.middle {
    width: 80%;
    }


    /* Clear floats after the columns */
    footer {
        color: black;
        background-color: #ddd;
        padding: 5px;
        margin: 0;
        clear:both;
        width: 100%;
        height: 230px;
    }

    footer div {
        width: 31%;
        margin: 10px;
    }

    footer div ul {
        list-style-type: none;
    }
    ```
