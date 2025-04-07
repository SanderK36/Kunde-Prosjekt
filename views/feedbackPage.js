
function feedbackPageView(){
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

    
    <div id ='feedbackBox'> 
    <h2>Oppgave: Hvordan gjøre et godt morgenmøte</h2>
    <div id="lineDiv"></div>
    <div>
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
    </div>

    </div> 
    <div id ='feedbackBox'> 
    <h2>Tilbakemelding</h2>
    <div id="lineDiv"></div>
    <input type="text" id="feedbackInput" placeholder="Skriv tilbakemelding her..."><br>
    <button id="assignmentBtn" onclick="">Send</button>
    
    </div>
    
    `;
}