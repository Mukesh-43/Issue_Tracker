# Issue_Tracker
    nodejs + ejs  application to track issues of the projects.
      
## Features :

### 1. Home Page
    1.1. Shows the list of all projects.
    1.2. Given a button to create a new Project (On creating a new project it'll appear in the list)
### 2. Create Project Page
    2.1. Create project form is designed using the fields,
        -Name
        -Description
        -Author
        -create and a close button
### 3. Project Detail Page
    3.1. When the user clicks on a project (in home page) redirect the user to this page which will show issues related to this project
    3.2. User is able to perform following actions on this page
        -Filter by multiple labels i.e. It'll be able to filter by 2 or more labels at the same time
        -Filter by author
        -Search by title and description
    3.3. A button to create an issue
### 4. Create issue page
    4.1. User is able to create an issue for a project
    4.2. Accept the following fields
        -Title
        -Description
        -Labels (multiple labels can be added to a project, IF a project has a label already show it (in dropdown) as the user types the label in)
        -Author
