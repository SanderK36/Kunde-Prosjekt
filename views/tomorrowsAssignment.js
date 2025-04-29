function tomorrowsAssignmentView(){

    if(model.app.loggedInUser.admin == true){
        document.getElementById('app').innerHTML = /*HTML*/ `
    
    <div id='header'>
    <div class ="logo"><img src="./img/GET.png" alt=""></div>
    <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
    <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
    <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
    <div class="userButton" onclick="userPageView()">Bruker</div>
    <div onclick="adminClassPageView()" class="userButton"> Admin </div>
    <div id="search">
    <input type="text" id="searchInput" placeholder="Søk...">
    <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
    </div>

    </div> <br>
    <h1 class="topLeftBox" id ="tomorrowAssignmentBox">Morgendages oppgave</h1>
    <div class="centerTextBox"> 
    <h2>Hvordan være forberedt</h2>
    <div id="lineDiv"></div>
    <br>

    <div class="bulletPoints">
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
    </div>
    `;
    } else {
        document.querySelector('#app').innerHTML = /*HTML*/ `
    
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
    <h1 class="topLeftBox" id ="tomorrowAssignmentBox">Morgendages oppgave</h1>
    <div class="centerTextBox"> 
    <h2>Hvordan være forberedt</h2>
    <div id="lineDiv"></div>
    <br>

    <div class="bulletPoints">
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
    </div>
    `;
    }
}