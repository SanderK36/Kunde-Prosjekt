
function adminClassPageView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    
    <div id='header'>
    <div class ="logo">Logo</div>
    <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
    <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
    <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
    <div class="userButton" onclick="userPageView()">Bruker</div>

    <div id="search">
    <input type="text" id="searchInput" placeholder="Søk...">
    <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
    </div>
    </div> <br>

    <h1> Adminoversikt over klassene</h1>
    <div id="classBoxes">
    <div id="box">Klasse 1</div>
    <div id="box">Klasse 2</div>
    <div id="box">Klasse 3</div> <br>
    <div id="box">Klasse 4</div>
    <div id="box">Klasse 5</div>
    <div id="addBox">+</div>
    </div>
`;


}