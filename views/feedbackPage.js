
function feedbackPageView(){
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

    
    <div id="feedBackWrap">
    <div id ='feedbackBox'> 
    <h2>Oppgave: Hvordan gjøre et godt morgenmøte</h2>
    <div id="feedBackLine"></div>
    <div class="bulletPoints">
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
    </div>

    </div> 
    <div id ='feedbackBox'> 
    <h2>Tilbakemelding</h2>
    <div id="feedBackLine"></div>
    <textarea name="" id="feedbackInput" placeholder="Skriv tilbakemelding her..."></textarea><br>
    <button id="feedBackBtn" onclick="">Send</button>
    </div>
    </div>
    
    `;
}