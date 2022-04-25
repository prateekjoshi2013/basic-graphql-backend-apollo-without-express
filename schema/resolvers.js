const {UserList,MovieList} =require('../fake-data')


/**
 * Parent...
 * Parent field return the results from the parent resolvers 
 * for ex: users -> User -> favoriteMovies  
 * 
 * Context....
 * Context authentication, authorization, token the classes values or data 
 * needed in every resolver is passed in context 
 * 
 * info...
 * info gives us the detailed information about how 
 * the resolver was reached like the path to the current resolver
 * 
 * Fragment reusability of set of fields to fetch in response of a query

            query users{
            users {
                id
                ...GetAgeAndName
                favouriteMovies {
                name
                }
            }
            }


            fragment GetAgeAndName on User {
            name
            age
            nationality
            }


 */
const resolvers={
    Query:{
        users: (parent,args,context)=> {
            console.log(parent)
            console.log(context)
            if(UserList){
                return {users : UserList}
            }else{
                return {message: "Error in fetching list" }
            }
        },
        user:(parent,args,context,info)=> {
            return UserList.filter(user => user.id == args.id)[0] 
        },
        // MOVIE RESOLVERS
        movies:()=>{
            return MovieList
        },
        movie:(parent,args)=> {
            return  MovieList.filter(movie => args.name === movie.name)[0] 
        }
    },
    User:{
        favouriteMovies:(parent)=> {
            console.log(parent)
            return  MovieList.filter(movie =>  movie.yearOfPublication >=2000 && movie.yearOfPublication <2010 )
        }
    },
    Mutation:{
        createUser:(parent,args)=>{
            const newUser={...args.input , id:UserList.length+1}
            UserList.push(newUser)
            return newUser
        },
        updateUser:(parent,args)=>{
            const user=UserList.filter(user => user.id==args.input.id)[0]
            user.name=args.input.name
            user.username=args.input.username
            return user
        },
        deleteUser:(parent,args)=>{
            UserList.filter(user => user.id==args.id)
            return null
        }
    },
    UsersResult:{
        __resolveType(obj){
            if(obj.users){
                return "UserSuccessfulResult"
            }
            return "UsersErrorResult"
        }
    }

}

module.exports = {resolvers}

