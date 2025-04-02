function searchPageView() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  <div id='header'>
    <div class ="logo">Logo</div>
    <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
    <i class="fa-solid fa-calendar-days"></i>
    <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
    <div class="userButton" onclick="userPageView()">Bruker</div>

    <div id="search">
    <input type="text" id="searchInput" placeholder="Søk...">
    <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
    </div>

    </div> <br>
    ${searchResults()}
  `;
  
  
}

function searchResults(){
  let html = `<h1 id='searchPageBox'>Søk: ${model.input.search.searchInput}<ul>`;
  for(let i = 0; i < model.data.assignments.length; i++){
    
    if(model.data.assignments[i].title.includes(model.input.search.searchInput)
    || model.data.assignments[i].text.includes(model.input.search.searchInput)){
      html += `<li id="searchPageBoxLi">${model.data.assignments[i].week} <br> ${model.data.assignments[i].title} - ${model.data.assignments[i].text}</li>`;
    }
  }
  html += `</ul></h1>`;
  return html;
}