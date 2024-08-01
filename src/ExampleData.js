import uniqid from 'uniqid'

const exampleData = {
    personalInfo: {
        fullName: "Rafael Botella",
        email: "oneBot@gmail.com",
        phoneNumber: "+34 555 555 555",
        city: "Alicante"
    },

    education: [
        {
            degree: "Degree in Web Application Developement",
            year: "2024 - present",
            school: "Centre de Estudis Especifics a Distancia",
            city: "Valencia, Spain",
            id: uniqid(),            
        },
        {
            degree: "Javascript's Algorithms and Data Structures",
            year: "2024",
            school: "freeCodeCamp",
            city: "San Francisco, Californa",
            id: uniqid(),            
        },
        {
            degree: "CS50's Introduction to Programming with Python",
            year: "2023 - 2024",
            school: "Harvard University",
            city: "Cambridge, Massachusetts",
            id: uniqid(),            
        },
        {
            degree: "Responsive Web Design",
            year: "2022",
            school: "freeCodeCamp",
            city: "San Francisco, California",
            id: uniqid(),            
        },
        {
            degree: "Master in Professional Archaeology and Historical Heritage Management",
            year: "2021",
            school: "University of Alicante",
            city: "Alicante, Spain",
            id: uniqid(),            
        },
    ],

    experience: [
        {
            position: "Archaelogist (yes, seriously)",
            company: "Estrats Treballs d'Arqueologia",
            description: "Digging holes, watching over construction workes and producing technical documentation",
            city: "Alicante, Spain",
            time: "2022 - present", //To Do: Enable this to capture the cool date-type input
            id: uniqid() 
        },
        {
            position: "Co-founder and Content creator",
            company: "Excapic Culturals Experiences",
            description: "Writting and testing historical and touristical tours for our own application. Emphasising accessibility and playful learning",
            city: "Alicante, Spain",
            time: "2021 - present", //To Do: Enable this to capture the cool date-type input
            id: uniqid() 
        },
        {
            position: "Waiter",
            company: "Jacapaca bar de tapas",
            description: "Serving food and drink. Attending to customers in the bar that probably makes the best croquettes in town.",
            city: "Alicante, Spain",
            time: "2021 - present", //To Do: Enable this to capture the cool date-type input
            id: uniqid() 
        },
    ]
}

export default exampleData