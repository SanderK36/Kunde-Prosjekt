
const model = {
    app:{
        currentPage: 'homePage',

        pages:['homePage', 'logInPage', 'userPage', 'searchPage', 'assignmentPage', 'feedbackPage', 
            'assignmentDeliveryPage', 'nextDaysAssignmentPage', 'adminClassPage', 'assignmentBank',
            'createNewAssignmentPage', 'editAssignmentPage', 'calendarPage', 'datePage' 
        ],

    },

    input:{
        logInInput: {emailInput: "", passwordInput: "", admin: true,},
        
        //Nice to have 
        rating: {userId:0 , ratingNumber:5,},
        
        search: {searchInput: ''},
        
        assignmentsThisWeek:[],
        
        newAssignments:{id:1, deliveryDate:'', title:'', subject:[], tags:[], save:false, delete:false, push:false},
        
        editAssignments:{id:1,title:'' ,subject:[], tags:[], save:false, delete:false},
    },

    data:{
        login: false,
        
        assignments:[
            { id: 1, week:'Uke: 1', day:'1',  subject: [], title: 'noe gøy'  , text: 'det er sol i dag', tagsId: [1], 
            isDelivered: false, classId:0, creatorId:0},
            { id: 2, week:'Uke: 2', day:'1',  subject: [], title: 'noe gøy'  , text: 'det er sol i dag', tagsId: [1], 
                isDelivered: false, classId:0, creatorId:0},
            { id: 3, week:'Uke: 5', day:'1',  subject: [], title: 'noe gøy'  , text: 'det er sol i dag', tagsId: [1], 
                isDelivered: false, classId:0, creatorId:0},
        ],


        tags: [
            {tagId:1 , theme: 'Læring', tagName: 'Logg', color: 'Blue'}
        ],
        //nice to have
       // adminOverview:[
        //    {id:1, classes:[className, assignments,], addNewClass:false}
       // ],

       /*Lage noen dummy users som kan teste login*/ 
        users:[
            {id:1, email: 'dummy@user.net', name: 'dummy', password:'111', admin: false,},
            {id:2, email: 'jeg@user.net', name: 'jeg', password:'222', false: false,},
            {id:3, email: 'deg@user.net', name: 'deg', password:'333', admin: false},
            {id:4, emial: 'admin@user.net', name: 'admin', passord:'123', admin: true}
        ],
        date:{day:1,week:1,month:1,year:2025},

        assignmentToday: {message:'', assignmentId:0, save: false, delete: false},

        assignmentTomorrow: {assignmentId: 0, date: 1-1-2025,} ,

       // calendar:{weekdays:[],month:[], days  ,assignmentPlanned:{date ,text: ''}},

         assignmentBank:[
             {id:1, assignmentTitle: '', subject: [], tags: [], }
         ],
       icons: [
        { id:'calendar' ,link: `<i class="fa-solid fa-calendar-days"></i`,},
        { id:'magnifyingGlass',link: `<i class="fa-solid fa-magnifying-glass"></i>`},
        { id:`bell`, link:`<i class="fa-solid fa-bell"></i>`}
    ]     
    },
}