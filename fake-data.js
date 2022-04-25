 const UserList=[
    {
        id:1,
        name:"John",
        username:"john",
        age:20,
        nationality:"CANADA",
        friends:[{
            id:2,
            name:"Pedro",
            username:"pedroTech",
            age:20,
            nationality:"BRAZIL"
        }]
    },
    {
        id:2,
        name:"Pedro",
        username:"pedroTech",
        age:20,
        nationality:"BRAZIL"
    },
    {
        id:3,
        name: "Sarah",
        username: "Cameron",
        age: "25",
        nationality: "INDIA",
        friends:[{
            id:2,
            name:"Pedro",
            username:"pedroTech",
            age:20,
            nationality:"BRAZIL"
        }]
    }
]

const MovieList=[
    {
        id:1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheatres: true,
    },
    {
        id: 2,
        name: "Interstellar",
        yearOfPublication: 2007,
        isInTheatres: true,
    }
]

module.exports = {UserList,MovieList}