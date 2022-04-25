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
    }

}

module.exports = {resolvers}

