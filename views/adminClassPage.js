
// function adminClassPageView(){

//     if(model.app.loggedInUser.admin == true){

//         document.getElementById('app').innerHTML = /*HTML*/ `
        
//         <div id='header'>
//         <div class ="logo"><img src="./img/GET.png" alt=""></div>
//         <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
//         <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
//         <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
//         <div class="userButton" onclick="userPageView()">Bruker</div>
//         <div onclick="adminClassPageView()" class="userButton"> Admin </div>
//         <div id="search">
//         <input type="text" id="searchInput" placeholder="Søk...">
//         <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
//         </div>
//         </div> <br>
        
//         <div>
//         <h1 id="adminClassPageHeader"> Adminoversikt over klassene <button id="addBox">Trykk her for å legge til flere klasser</button> <button id="addBox" onclick="createNewAssignmentPageView()">Trykk her for å lage en oppgave</button></h1>
//         </div>
        
//         <div id="adminClassBoxes">
//         <div class="classBox">Klasse 1 <i class="fa-solid fa-pen-to-square"></i></div>
//         <div class="classBox">Klasse 2 <i class="fa-solid fa-pen-to-square"></i></div>
//         <div class="classBox">Klasse 3 <i class="fa-solid fa-pen-to-square"></i></div>
//         <div class="classBox">Klasse 4 <i class="fa-solid fa-pen-to-square"></i></div>
//         <div class="classBox">Klasse 5 <i class="fa-solid fa-pen-to-square"></i></div>
//         <div class="classBox">Klasse 6 <i class="fa-solid fa-pen-to-square"></i></div>
//         </div>
//         `;
//     }
//     else {
//         homePageView()}   
        
        
//     }


function adminClassPageView() {
    if (model.app.loggedInUser.admin == true) {
        document.getElementById('app').innerHTML = /*HTML*/`
            <div id="header">
                <div class="logo"><img src="./img/GET.png" alt=""></div>
                <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
                <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
                <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
                <div class="userButton" onclick="userPageView()">Bruker</div>
                <div class="userButton adminActive" onclick="adminClassPageView()">Admin</div>
                <div id="search">
                    <input type="text" id="searchInput" placeholder="Søk...">
                    <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
                </div>
                <div class="headerAvatar" onclick="userPageView()">
                    <img src="./img/avatar.png" alt="User Avatar">
                </div>
            </div>

            <div id="adminClassWrapper">
                <div id="adminClassPageHeader">
                    <h1>Adminoversikt over klassene</h1>
                    <div id="adminActions">
                        <button id="addClassBtn" onclick="addClass()">Legg til klasse</button>
                        <button id="createAssignmentBtn" onclick="createNewAssignmentPageView()">Lag ny oppgave</button>
                    </div>
                </div>
                <div id="adminClassBoxes">
                    <div class="classBox">Klasse 1 <i class="fa-solid fa-pen-to-square" onclick="editClass(1)"></i></div>
                    <div class="classBox">Klasse 2 <i class="fa-solid fa-pen-to-square" onclick="editClass(2)"></i></div>
                    <div class="classBox">Klasse 3 <i class="fa-solid fa-pen-to-square" onclick="editClass(3)"></i></div>
                    <div class="classBox">Klasse 4 <i class="fa-solid fa-pen-to-square" onclick="editClass(4)"></i></div>
                    <div class="classBox">Klasse 5 <i class="fa-solid fa-pen-to-square" onclick="editClass(5)"></i></div>
                    <div class="classBox">Klasse 6 <i class="fa-solid fa-pen-to-square" onclick="editClass(6)"></i></div>
                </div>
            </div>
        `;
    } else {
        homePageView();
    }
}