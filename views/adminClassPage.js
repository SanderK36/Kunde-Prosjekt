
function adminClassPageView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    
    <div id='header'>
    <div class ="logo"><img src="./img/GET.png" alt=""></div>
    <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
    <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
    <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
    <div class="userButton" onclick="userPageView()">Bruker</div>

    <div id="search">
    <input type="text" id="searchInput" placeholder="Søk...">
    <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
    </div>
    </div> <br>

    <div>
    <h1 id="adminClassPageHeader"> Adminoversikt over klassene <button id="addBox">Trykk her for å legge til flere klasser</button></h1>
    </div>

    <div id="adminClassBoxes">
    <div class="classBox">Klasse 1 <i class="fa-solid fa-pen-to-square"></i></div>
    <div class="classBox">Klasse 2 <i class="fa-solid fa-pen-to-square"></i></div>
    <div class="classBox">Klasse 3 <i class="fa-solid fa-pen-to-square"></i></div>
    <div class="classBox">Klasse 4 <i class="fa-solid fa-pen-to-square"></i></div>
    <div class="classBox">Klasse 5 <i class="fa-solid fa-pen-to-square"></i></div>
    <div class="classBox">Klasse 6 <i class="fa-solid fa-pen-to-square"></i></div>
    </div>
`;



}