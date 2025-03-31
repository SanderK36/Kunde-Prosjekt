function updateView(){
    let = currentPage = model.app.currentPage;

    switch(currentPage){
        case 'logInPage': logInPageView();
            break;       
        case 'homePage': homePageView();
            break;       
        
    }
}