function assignmentDeliveryPageView(){
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

   
    <div class="centerTextBox"> 
    <h2>Hvordan være forberedt</h2>
    <div id="lineDiv"></div>
    <br>
    
    <div>
    <li>Hva kan du ha forberedt deg på til morgenmøtet?</li>
    <li>Hvordan kan du bidra til et godt morgenmøte?</li>
    <li>Hvilke styrker kan man bruke?</li>
    <br>
    <br>
    <textarea name="" id="teeest" placeholder="Skriv her..."></textarea>


        </div>

        <div id="assignmentWrap">
    <button>Lever</button>
    <button>Avbryt</button>
    </div>

    </div>
    `;
}