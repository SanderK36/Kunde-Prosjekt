
const model = {
    app:{
        currentPage: 'homePage',

        pages:['homePage', 'logInPage', 'userPage', 'searchPage', 'assignmentPage', 'feedbackPage', 
            'assignmentDeliveryPage', 'nextDaysAssignmentPage', 'adminClassPage', 'assignmentBank',
            'createNewAssignmentPage', 'editAssignmentPage', 'calenderPage', 'datePage' 
        ],

    },

    input:{
        logInInput: {emailInput: "", passwordInput: "", admin: true,},
        
        comment:{text:'', assignmentId:1, },

        //Nice to have 
        rating: {userId:0 , ratingNumber:5,},

        search: {searchInput: ''},

    },

    data:{
        login: false,
        header:[
            { id: 1, logo:'', assignments:'', search:'', notification:'', calender:'', user:''},       
    ],
        
        week:'',
        assignments: [
            { id: 1, week:'', day:'',  subject: '', tasks: '', tags: [], isDelivered: false,}
        ],

        tags: [
            {theme: '', tagName: '', color: ''}
        ],

        adminClassPage: [
            {classes:[className, assignments]},
        ],

        users: [
            {id:1, email: '', name: '', password:'', }
        ],
        date:{day:1,week:1,month:1,year:2025},

        assignmentBank: [
            {id:1, assignment: '', subject: '', tags: [], }
        ]
    },
}