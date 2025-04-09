function editAssignmentPageView(){
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
    <h2>Rediger oppgave</h2>
    <div id="lineDiv"></div>

    <div>
    <h2>Tema: Velg Tema Tittel: Tags: Velg tags</h2>

    </div>
    <br>
    


    <textarea name="" id="teeest" placeholder="Skriv her..."></textarea>




        <div id="assignmentWrap">
    <button>Lagre</button>
    <button>Avbryt</button>
    </div>

    </div>
    </div>
    
    
    
    `
}