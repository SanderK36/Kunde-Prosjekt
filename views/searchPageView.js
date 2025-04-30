// function searchPageView() {

//   if(model.app.loggedInUser.admin == true){
//     document.getElementById('app').innerHTML = /*HTML*/ `
//   <div id='header'>
//   <div class ="logo"><img src="./img/GET.png" alt=""></div>
//     <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
//     <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
//     <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
//     <div class="userButton" onclick="userPageView()">Bruker</div>
//     <div onclick="adminClassPageView()" class="userButton"> Admin </div>
//     <div id="search">
//     <input type="text" id="searchInput" placeholder="Søk...">
//     <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
//     </div>

//     </div> <br>
//     ${searchResults()}
//   `;
//   } else {
//     document.querySelector('#app').innerHTML = /*HTML*/ `
//   <div id='header'>
//   <div class ="logo"><img src="./img/GET.png" alt=""></div>
//     <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
//     <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
//     <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
//     <div class="userButton" onclick="userPageView()">Bruker</div>
//     <div id="search">
//     <input type="text" id="searchInput" placeholder="Søk...">
//     <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
//     </div>

//     </div> <br>
//     ${searchResults()}
//   `;
//   }
  
// }

// function searchResults(){
//   let found = false;
//   let html = `<h1 id='searchPageBox'>Søk: ${model.input.search.searchInput}<ul>`;
//   for(let i = 0; i < model.data.assignments.length; i++){
    
//     if(model.data.assignments[i].title.includes(model.input.search.searchInput)
//     || model.data.assignments[i].text.includes(model.input.search.searchInput)){
//       html += `<li id="searchPageBoxLi">${model.data.assignments[i].week} <br> ${model.data.assignments[i].title} - ${model.data.assignments[i].text}</li>`;
//       found = true;
//     }
//   }

//   if (!found) {
//     html += `<li id="searchPageBoxLi">Ingen oppgaver funnet</li>`;
//   }
//   html += `</ul></h1>`;
//   return html;
// }


function searchPageView() {
  document.getElementById('app').innerHTML = /*HTML*/`
      <div id="header">
          <div class="logo"><img src="./img/GET.png" alt=""></div>
          <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
          <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
          <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
          <div class="userButton" onclick="userPageView()">Bruker</div>
          ${model.app.loggedInUser.admin ? 
              '<div class="userButton adminActive" onclick="adminClassPageView()">Admin</div>' : 
              ''}
          <div id="search">
              <input type="text" id="searchInput" placeholder="Søk..." value="${model.input.search.searchInput || ''}">
              <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
          </div>
          <div class="headerAvatar" onclick="userPageView()">
            <img src="./img/avatar.png" alt="User Avatar">
        </div>
      </div>
      <div id="searchWrapper">
          <h1 id="searchHeader">Søk: ${model.input.search.searchInput || ''}</h1>
          <div id="searchResults">${searchResults()}</div>
      </div>
  `;
}

function searchResults() {
  let found = false;
  let html = '<ul class="searchResultsList">';
  for (let i = 0; i < model.data.assignments.length; i++) {
      if (model.data.assignments[i].title.includes(model.input.search.searchInput) ||
          model.data.assignments[i].text.includes(model.input.search.searchInput)) {
          html += /*HTML*/`
              <li class="searchResultItem" onclick="viewAssignment(${i})">
                  <div class="searchResultWeek">${model.data.assignments[i].week}</div>
                  <div class="searchResultTitle">${model.data.assignments[i].title}</div>
                  <div class="searchResultText">${model.data.assignments[i].text}</div>
              </li>
          `;
          found = true;
      }
  }
  if (!found) {
      html += '<li class="searchResultItem noResults">Ingen oppgaver funnet</li>';
  }
  html += '</ul>';
  return html;
}