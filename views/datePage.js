
function datePageView(){
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

    <div id="datePageBtns">
    <h1 class="topLeftBox" id="currentDate">09.04.2025</h1>
    
    <button id="lastDay">Forrige dag</button>
    <button id="nextDay">Neste dag</button>
    </div>

    <div class="centerTextBox"> 
    <h2>Planlagt oppgave:</h2><br><h3>Hvordan være forberedt</h3> 
    <br>
    `;
    
}
