const {UserList,MovieList} =require('../fake-data')

const resolvers={
    Query:{
        users: ()=> {
            return UserList;
        },
        user:(parent,args)=> {
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
        favouriteMovies:()=>{
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
    }

}

module.exports = {resolvers}

