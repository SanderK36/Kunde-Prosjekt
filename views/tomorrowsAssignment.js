function tomorrowsAssignmentView(){
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
    <h1 class="topLeftBox" id ="tomorrowAssignmentBox">Morgendages oppgave</h1>
    <div class="centerTextBox"> 
    <h2>Hvordan være forberedt</h2>

    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
    </div>
    `;
}