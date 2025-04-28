function checkLoginInfo(){

    for(let i = 0; i < model.data.users.length; i++){
         currentUser = model.data.users[i];

        if(model.input.logInInput.emailInput == currentUser.email 
            && model.input.logInInput.passwordInput == currentUser.password
            && currentUser.admin == false){
                model.app.loggedInUser = currentUser
           
            homePageView();
            return;
        }
        else if (model.input.logInInput.emailInput == currentUser.email && 
            model.input.logInInput.passwordInput == currentUser.password && 
            currentUser.admin == true){
                model.app.loggedInUser = currentUser
                adminClassPageView()
                return;
        }
        
        else {
        
            // legge inn en 404 page, elelr feil passord side elns eller! rød tekst i login et eller annet
        }
    }
}