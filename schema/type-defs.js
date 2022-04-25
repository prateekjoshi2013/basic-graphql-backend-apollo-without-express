const {gql}=require("apollo-server");

const typeDefs=gql`
    
    type User {
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:Nationality
        friends: [User!]
        favouriteMovies: [Movie]
    }

    type Movie{
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheatres: Boolean!
    }

    type Query {
        users:[User!]!
        user (id:ID!): User!
        movies: [Movie!]!
        movie(name:String!): Movie!
    }

    enum Nationality {
        CANADA
        BRAZIL  
        INDIA
        GERMANY
        CHILE
    }
    
    input CreateUserInput {
        name:String!
        username:String!
        age:Int = 18
        nationality: Nationality = BRAZIL
    }

    input UpdateUserInput {
        name:String!
        username:String!
        id:ID!
    }

    type Mutation {
        createUser(input: CreateUserInput! ): User!
        updateUser(input: UpdateUserInput): User!
        deleteUser(id:ID!): User
    }
    
    
    `

module.exports={typeDefs}