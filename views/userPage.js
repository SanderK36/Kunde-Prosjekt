function userPageView() {
    const isAdmin = model.app.loggedInUser.admin === true;
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div id="header">
            <div class="logo"><img src="./img/GET.png" alt=""></div>
            <button id="assignmentBtn" onclick="homePageView()">Mine oppgaver</button>
            <i class="fa-solid fa-calendar-days" onclick="calendarView()"></i>
            <i class="fa-solid fa-bell" onclick="tomorrowsAssignmentView()"></i>
            ${isAdmin ? '<div onclick="adminClassPageView()" class="userButton"> Admin </div>' : ''}
            <div id="search">
                <input type="text" id="searchInput" placeholder="Søk...">
                <i class="fa-solid fa-magnifying-glass" onclick="searchAssignment()"></i>
            </div>
            <div class="headerAvatar" onclick="userPageView()">
                <img src="./img/avatar.png" alt="User Avatar">
            </div>
        </div>

        <div id="profileWrapper">
            <div id="profileCard">
                <div id="profileAvatar">
                    <img src="./img/avatar.png" alt="User Avatar">
                </div>
                <h2 id="profileName">${model.app.loggedInUser.name}</h2>
                <p id="profileRole">${isAdmin ? 'Administrator' : 'Student'}</p>
                <div id="profileInfo">
                    <div class="infoItem">
                        <span class="infoLabel">E-post:</span>
                        <span>${model.app.loggedInUser.email || 'Ikke tilgjengelig'}</span>
                    </div>
                    <div class="infoItem">
                        <span class="infoLabel">Navn:</span>
                        <span>${model.app.loggedInUser.name}</span>
                    </div>
                    ${isAdmin ? `
                        <div class="infoItem">
                            <span class="infoLabel">Admin:</span>
                            <span>Aktiv</span>
                        </div>
                    ` : ''}
                    <div class="infoItem">
                        <span class="infoLabel">Sist logget inn:</span>
                        <span>${new Date().toLocaleString()}</span>
                    </div>
                </div>
                
                <div id="profileActions">
                    <button id="editProfileBtn" onclick="editProfileView()">Rediger profil</button>
                    <button id="saveSettingsBtn">Lagre</button>
                    <button id="logOutBtn" onclick="logInPageView()">Logg ut</button>
                </div>
            </div>
        </div>
    `;
}