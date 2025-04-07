function assignmentDeliveryPageView(){
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

   
    <div class="centerTextBox"> 
    <h2>Hvordan være forberedt</h2>
    <div id="lineDiv"></div>
    <br>
    
    <div class="bulletPoints">
    <li>Hva kan du ha forberedt deg på til morgenmøtet?</li>
    <li>Hvordan kan du bidra til et godt morgenmøte?</li>
    <li>Hvilke styrker kan man bruke?</li>
    <br>
    <br>
    <input type="text" placeholder="skriv her">


        </div>

    <button>Lever</button>
    <button>Avbryt</button>

    </div>
    `;
}