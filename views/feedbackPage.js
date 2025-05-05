
function feedbackPageView(){

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
    <div class="headerAvatar" onclick="userPageView()">
    <img src="./img/avatar.png" alt="User Avatar">
    </div>
    </div> <br>

    
    <div id="feedBackWrap">
    <div id ='feedbackBox'> 
    <h2>Oppgave: Hvordan gjøre et godt morgenmøte</h2>
    <div id="feedBackLine"></div>
    <div class="bulletPoints">
    <li id="feedBackLi">Hva kan du ha forberedt deg på til morgenmøtet?</li>
    <li id="feedBackLi">Hvordan kan du bidra til et godt morgenmøte?</li>
    <li id="feedBackLi">Hvilke styrker kan man bruke?</li>
    </div>

    </div> 
    <div id ='feedbackBox'> 
    <h2>Tilbakemelding</h2>
    <div id="feedBackLine"></div>
    <textarea name="" id="feedbackInput" placeholder="Skriv tilbakemelding her..."></textarea><br>
    <button id="feedBackBtn" onclick="assignMentDeliveryPageView()">Send</button>
    </div>
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
    <div class="headerAvatar" onclick="userPageView()">
    <img src="./img/avatar.png" alt="User Avatar">
    </div>
    </div> <br>

    
    <div id="feedBackWrap">
    <div id ='feedbackBox'> 
    <h2 id="feedBackText">Oppgave: Hvordan gjøre et godt morgenmøte</h2>
    <div id="feedBackLine"></div>
    <div class="bulletPoints">
    <li id="feedBackLi">Hva kan du ha forberedt deg på til morgenmøtet?</li>
    <li id="feedBackLi">Hvordan kan du bidra til et godt morgenmøte?</li>
    <li id="feedBackLi">Hvilke styrker kan man bruke?</li>
    </div>

    </div> 
    <div id ='feedbackBox'> 
    <h2>Tilbakemelding</h2>
    <div id="feedBackLine"></div>
    <textarea name="" id="feedbackInput" placeholder="Skriv tilbakemelding her..."></textarea><br>
    <button id="feedBackBtn" onclick="">Send</button>
    <button id="feedBackBtn" onclick="homePageView()">Tilbake</button>
    </div>
    </div>
    
    `;
    }
}