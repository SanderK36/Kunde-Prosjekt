function createNewAssignmentPageView(){
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
    <div id="newAssignmentWrap">
    <div id ='newAssignmentBox'> 
    <h2 class="newAssignmentHeader">Lag ny oppgave</h2>
    <h2 class="chooseDateHeader">Leveres: Velg dato <select name="dropdown" id="dropdown">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
    </select></h2>
    <div id="newAssignmentLineDiv"></div>

    <div>
    <h2>Velg Tema: <select name="dropdown" id="dropdown">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
    </select></h2>

    <h2>Velg tags: <select name="dropdown" id="dropdown">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
    </select></h2>

    <h2>Velg Tittel: <select name="dropdown" id="dropdown">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
    </select></h2>

    </div>
    <br>


    <div id="newAssignmentBtnWrap">
    <textarea name="" id="newAssignmentTextarea" placeholder="Skriv her..."></textarea>
    <div id="buttonContainer">
        <button>Lagre</button>
        <button>Avbryt</button>
        <button>Push</button>
    </div>
    </div>

    </div>
    </div>
    
    
    
    `


}